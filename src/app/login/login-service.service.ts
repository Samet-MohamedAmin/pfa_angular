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

export const ROLES = {student:'étudiant', partner: 'professional', admin: 'admin'};
export const ROLE_LIST = Object.keys(ROLES);

export const BRANCHES = { GL: 'Génie Logiciel',
                          RT: 'Réseau et Télécommunication',
                          IIA: 'Informatique Industriel et Automatique',
                          IMI: 'Instrumentation et Maintenance Industriel',
                          CH: 'Chimie',
                          BIO: 'Biologie'}