import { Component, OnInit } from '@angular/core';
import { SharedService, TrainingRequestState } from '@4c-shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from '../training.service';
import { AuthenticationService } from '@4c-auth/authentication.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  //this is the real training object to use after that
  training: any;

  dummyBranchTreeList = ['Informatique', 'DevOps', 'Test Logiciel'];

  dummyText = `
  Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet pretium congue egestas, enim convallis libero montes senectus vestibulum nisl dis habitant. Conubia nibh vestibulum id sagittis augue felis dictum rhoncus, condimentum eros eget sem ut lobortis enim, est porttitor porta himenaeos rutrum cum neque. Per sociosqu maecenas orci rutrum velit molestie aenean, quam interdum magnis aliquet senectus leo nibh sed, pellentesque scelerisque fermentum cursus netus magna. Eget primis neque euismod est molestie rutrum blandit venenatis rhoncus, aptent volutpat elementum lacus cum facilisis platea cubilia, consequat sapien egestas ante risus imperdiet nec magna.
  Inceptos nisl viverra blandit volutpat sollicitudin nostra non condimentum sagittis, id vivamus vehicula hac eget turpis rhoncus aptent magnis in, morbi netus aliquet est quisque vestibulum feugiat penatibus. Convallis curae volutpat accumsan ut per imperdiet eu quis, odio libero lacus sagittis nec cras duis tristique iaculis, nunc massa tempus suscipit tempor parturient vehicula. Nisi diam sollicitudin ante parturient ultrices hendrerit in suscipit nostra felis rutrum, condimentum posuere egestas cursus nam magnis integer pellentesque morbi elementum. Nisi malesuada non vestibulum inceptos nam vel convallis ultrices hac, sollicitudin porttitor gravida tempus duis torquent nulla nascetur, odio litora orci fusce proin ut curabitur mus.`

  preList = [
    'Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet pretium congue egestas, enim convallis libero montes.',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet pretium congue egestas,',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet pretium congue egestas, enim convallis libero montes senectus vestibulum nisl dis habitant.'
  ]

  rating:number;
  starList = [];
  
  trainingRequestState: TrainingRequestState = null;

  constructor(private route:ActivatedRoute,
              private auth: AuthenticationService,
              private trainingService:TrainingService) {
    this.route.params
    .subscribe(params=>{
      this.trainingService.getTrainingDetail(params.id)
      .subscribe((training)=>{
        console.log(training)
        this.training=training;
        this.getTrainingRequestState()
      })
    })
   }

  ngOnInit() {
    this.generateStars();

  }

  getTrainingRequestState(){
    const user = this.auth.getUserDetails();

    if(this.training.attendees && this.training.attendees.includes(user._id)){
      this.trainingRequestState = 'ACCEPTED';
    }
    else {
      this.trainingService.getUserRequests(user._id).subscribe(
        (registrationRequestList: any[]) => {
          const request: any = registrationRequestList
                                .find(reg => reg.courseId == this.training._id)
          if(request){
            const state: string = request.state.toUpperCase();
            if(state == 'PENDING') this.trainingRequestState = 'PENDING';
            else if(state == 'REJECTED') this.trainingRequestState = 'REJECTED';
         }
          
        }
      );
    }
   
  }
  generateStars(){
    this.rating = SharedService.getRandomNumber(4, 11);
    console.log(`
    rating: ${this.rating}`
    );
    let starFull = 'star';
    let starHalf = 'star_half';
    let starEmpty = 'star_border';

    for(let i=0; i<Math.floor(this.rating/2); i++){
      this.starList.push(starFull);
    }
    if(this.rating%2) this.starList.push(starHalf);
    let starEmptyNumber = 5 - this.starList.length;
    for(let i=0; i<starEmptyNumber; i++){
      this.starList.push(starEmpty);
    }

  }

  registerRequest(){
    if(this.trainingRequestState === null){
      const user = this.auth.getUserDetails();
      this.trainingService.requestRegistration(user.type,user._id, this.training._id).subscribe(
        obj => console.log(obj)
      );

      this.trainingRequestState = 'PENDING';
    }
  }

}
