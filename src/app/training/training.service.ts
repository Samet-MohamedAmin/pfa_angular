import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@4c-environments/environment';
import { AuthenticationService } from '../auth/authentication.service';
import { TrainingItemInterface } from './training.interface';
import { TrainingRequestState } from '@4c-shared/shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private url = environment.BACKEND_URL;

  constructor(private http:HttpClient , private authService:AuthenticationService) { }

  getAllTrainings(){
    return this.http.get(`${this.url}/course`)
  }


  getTrainingDetail(trainingId){
    return this.http.get(`${this.url}/course/${trainingId}`)
  }

  getRecommendations(userType,userId){
    return this.http.get(`${this.url}/course/recommandations/${userType}/${userId}`,
      { headers: new HttpHeaders().set('authorization', `Bearer ${this.authService.getToken()}`)})
    }

  getUserRequests(userId){
    return this.http.get(`${this.url}/course/request/${userId}`,
    { headers: new HttpHeaders().set('authorization', `Bearer ${this.authService.getToken()}`)})
  }


  requestRegistration(userType,userId,courseId){
    let body={
      userType,
      userId,
      courseId
    }
    return this.http.post(`${this.url}/course/registration/request`,body,
    { headers: new HttpHeaders().set('authorization', `Bearer ${this.authService.getToken()}`)}) 
  }

  rateCourse(userType,userId,courseId,rating){
    let body={
      userType,
      userId,
      courseId,
      rating
    }
    let headers =new HttpHeaders()
    headers.set('authorization', `Bearer ${this.authService.getToken()}`)
    headers.set('Content-Type', 'application/json')
    
    return this.http.post(`${this.url}/course/rate`,body,
    { headers: headers} )
  }

  //Admin endpoints

  getAllUserRequests(): Observable<any>{
    return this.http.get<any>(`${this.url}/course/request/all`,
    { headers: new HttpHeaders().set('authorization', `Bearer ${this.authService.getToken()}`)}) 
  }

  validRegistration(userType,userId,courseId): Observable<any>{
    let body={
      userType,
      userId,
      courseId
    }
    
    return this.http.post(`${this.url}/course/registration/valid`,body,
    { headers:new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `Bearer ${this.authService.getToken()}`)})
  }

  rejectRegistration(userId,courseId): Observable<any>{
    let body={
      userId,
      courseId
    }
    
    return this.http.post(`${this.url}/course/registration/reject`,body,
    { headers: new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `Bearer ${this.authService.getToken()}`)})
  }

  addTraining(course){
  
    return this.http.post(`${this.url}/course`,course,
    { headers :new HttpHeaders().set('authorization', `Bearer ${this.authService.getToken()}`)})

    }

  updateTraining(courseId,course){
    
    return this.http.put(`${this.url}/course/${courseId}`,course,
    { headers: new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `Bearer ${this.authService.getToken()}`)})
  }

  deleteTraining(courseId){ 
    return this.http.delete(`${this.url}/course/${courseId}`,
    { headers:new HttpHeaders().set('authorization', `Bearer ${this.authService.getToken()}`)}) 
  }

  mapTraining(training:any): TrainingItemInterface{
    // const trainingItem: TrainingItemInterface = {
    //   title: training.title,
    //   instructor: training.instructor,
    //   startDate: training.startDate,
    //   endDate: training.endDate,
    //   totalHours: training.totalHours,
    //   totalPlaces: training.totalPlaces,

    //   level: training.level,
    //   requirements: training.requirements[0].split('\r\n'),
    //   type: training.type,
    //   concernedBranches: training.concernedBranches,

    //   goals: training.goals[0].split('\r\n'),
    //   briefDescription: training.briefDescription,
    //   detailedDescription: training.detailedDescription,

    //   _id: training._id,
    //   courseImage: training.courseImage,
    //   imageAlt: 'training image alt',
    //   globalRating: training.globalRating,
    //   attendees: []
    // };

    const trainingItem: TrainingItemInterface = {
      ...training,
      imageAlt: 'training image alt',
      goals: training.goals[0].split('\r\n'),
      requirements: training.requirements[0].split('\r\n')
    };
    
    return trainingItem;
  }


}

