import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService, TrainingRequestState } from '@4c-shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from '../training.service';
import { AuthenticationService } from '@4c-auth/authentication.service';
import { TrainingItemInterface, TRAINING_LEVEL } from '../training.interface';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  //this is the real training object to use after that
  training: TrainingItemInterface;
  userDetails: any = null;

  // dummyBranchTreeList = ['Informatique', 'DevOps', 'Test Logiciel'];

  dummyText = `
  Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet pretium congue egestas, enim convallis libero montes senectus vestibulum nisl dis habitant. Conubia nibh vestibulum id sagittis augue felis dictum rhoncus, condimentum eros eget sem ut lobortis enim, est porttitor porta himenaeos rutrum cum neque. Per sociosqu maecenas orci rutrum velit molestie aenean, quam interdum magnis aliquet senectus leo nibh sed, pellentesque scelerisque fermentum cursus netus magna. Eget primis neque euismod est molestie rutrum blandit venenatis rhoncus, aptent volutpat elementum lacus cum facilisis platea cubilia, consequat sapien egestas ante risus imperdiet nec magna.
  Inceptos nisl viverra blandit volutpat sollicitudin nostra non condimentum sagittis, id vivamus vehicula hac eget turpis rhoncus aptent magnis in, morbi netus aliquet est quisque vestibulum feugiat penatibus. Convallis curae volutpat accumsan ut per imperdiet eu quis, odio libero lacus sagittis nec cras duis tristique iaculis, nunc massa tempus suscipit tempor parturient vehicula. Nisi diam sollicitudin ante parturient ultrices hendrerit in suscipit nostra felis rutrum, condimentum posuere egestas cursus nam magnis integer pellentesque morbi elementum. Nisi malesuada non vestibulum inceptos nam vel convallis ultrices hac, sollicitudin porttitor gravida tempus duis torquent nulla nascetur, odio litora orci fusce proin ut curabitur mus.`

  rating: number;
  starList = [];
  levels = TRAINING_LEVEL;
  
  trainingRequestState: TrainingRequestState = null;

  @ViewChild('starsContainer') starsContainer: ElementRef;

  constructor(private route:ActivatedRoute,
              private auth: AuthenticationService,
              private trainingService:TrainingService) {
    this.userDetails = this.auth.getUserDetails();
    this.route.params
    .subscribe(params=>{
      this.trainingService
            .getTrainingDetail(params.id)
            .subscribe((training)=>{
              console.log(training);
              
              this.training=this.trainingService.mapTraining(training);
              this.getTrainingRequestState();
              this.generateStars(this.training.globalRating);
            })
    })
  }

  ngOnInit() {
    console.log(this.userDetails.role);
  }

  getTrainingRequestState(){
    if(this.userDetails) {
      if(this.training.attendees && this.training.attendees.includes(this.userDetails._id)){
        this.trainingRequestState = 'ACCEPTED';
      }
      else {
        this.trainingService.getUserRequests(this.userDetails._id).subscribe(
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
  }

  rateTraining(eventData){
    const offsetLeft = this.starsContainer.nativeElement.offsetLeft;
    const offsetWidth = this.starsContainer.nativeElement.offsetWidth;
    const pageX = eventData.pageX;
    this.rating = Math.round((pageX - offsetLeft) * 10 / offsetWidth);

    this.trainingService
          .rateCourse(this.userDetails.role,this.userDetails._id, this.training._id, this.rating)
          .subscribe(obj => {console.log('rate training'); console.log(obj)});

    this.generateStars(this.rating);
  }
  
  generateStars(rating: number){
    // this.rating = SharedService.getRandomNumber(4, 11);
    // TODO: starList elements must be removed to free memory
    this.starList = [];

    console.log(`rating: ${rating}`);
    let starFull = 'star';
    let starHalf = 'star_half';
    let starEmpty = 'star_border';

    for(let i=0; i<Math.floor(rating/2); i++) this.starList.push(starFull);
    if(rating%2) this.starList.push(starHalf);
    let starEmptyNumber = 5 - this.starList.length;
    for(let i=0; i<starEmptyNumber; i++) this.starList.push(starEmpty);

  }

  registerRequest(){
    if(this.trainingRequestState === null){
      this.trainingService
          .requestRegistration(this.userDetails.role,this.userDetails._id, this.training._id)
          .subscribe(obj => {console.log('update training'); console.log(obj)});
      
      this.trainingRequestState = 'PENDING';
    }
  }

}
