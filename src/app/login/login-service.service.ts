import { Injectable } from '@angular/core';
import { Route, Params, ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,
              private route:ActivatedRoute) { }

  verifyRoute(){
    // verify that role is ROLE_LIST when accessing /sign-in/:role or /sign-up/:role
    // returning an observable containing role value
  }

}

export const ROLES = {student:'étudiant', partner: 'partenaire', admin: 'admin'};
export const ROLE_LIST = Object.keys(ROLES);