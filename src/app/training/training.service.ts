import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private url = environment.BACKEND_URL;

constructor(private http:HttpClient , private authservice:AuthenticationService) { }

getAllTrainings(){
  return this.http.get(`${this.url}/course`)
}

getTrainingDetail(trainingId){
  return this.http.get(`${this.url}/course/${trainingId}`)
}

getRecommendations(userType,userId){
  return this.http.get(`${this.url}/course/recommandations/${userType}/${userId}`,
    { headers: { authorization: `Bearer ${this.authservice.getToken()}` }} )
  }

getUserRequests(userId){
  return this.http.get(`${this.url}/course/request/${userId}`,
  { headers: { authorization: `Bearer ${this.authservice.getToken()}` }} )
}


requestRegistration(userId,courseId){
  let body={
    userId,
    courseId
  }
  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)
  headers.set('Content-Type', 'application/json')
  
  return this.http.post(`${this.url}/course/request/all`,body,
  { headers: headers} )
}

rateCourse(userType,userId,courseId,rating){
  let body={
    userType,
    userId,
    courseId,
    rating
  }
  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)
  headers.set('Content-Type', 'application/json')
  
  return this.http.post(`${this.url}/course/rate`,body,
  { headers: headers} )
}

//Admin endpoints

getAllUserRequests(){
  return this.http.get(`${this.url}/course/request/all`,
  { headers: { authorization: `Bearer ${this.authservice.getToken()}` }} )
}

validRegistration(userType,userId,courseId){
  let body={
    userType,
    userId,
    courseId
  }
  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)
  headers.set('Content-Type', 'application/json')
  
  return this.http.post(`${this.url}/course/registration/valid`,body,
  { headers: headers} )
}

rejectRegistartion(userId,courseId){
  let body={
    userId,
    courseId
  }
  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)
  headers.set('Content-Type', 'application/json')
  
  return this.http.post(`${this.url}/course/registration/reject`,body,
  { headers: headers} )
}

addTraining(course){

  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)
  headers.set('Content-Type', 'application/json')
  
  return this.http.post(`${this.url}/course/request/all`,course,
  { headers: headers} )
}

updateTraining(courseId,course){
  
  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)
  headers.set('Content-Type', 'application/json')
  
  return this.http.put(`${this.url}/course/${courseId}`,course,
  { headers: headers} )
}

deleteTraining(courseId){
  let headers =new HttpHeaders()
  headers.set('authorization', `Bearer ${this.authservice.getToken()}`)  
  return this.http.delete(`${this.url}/course/${courseId}`,
  { headers: headers} )
}

}

