import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/* NOTE: if you will send request that requires authentication:
add this  { headers: { authorization: `Bearer ${this.getToken()}` }}*/

@Injectable()
export class AuthenticationService {
  private token: string;
  private url = environment.BACKEND_URL;
  userEmitter = new EventEmitter<any>()
  constructor(private http: HttpClient, private router: Router) {
  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(type: 'login' | 'register', credentials): Observable<any> {

    let base = this.http.post(`${this.url}/${type}`, credentials);


    const request = base.pipe(
      map((data: any) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user): Observable<any> {
    return this.request('register', user);
  }

  public login(userCredentials): Observable<any> {
    return this.request('login', userCredentials);
  }


  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  updateUserState() {
    this.userEmitter.emit(this.getUserDetails())
  }
}