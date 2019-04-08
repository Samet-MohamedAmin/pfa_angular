import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

}

export const ROLES = {student:'étudiant', partner: 'partenaire', admin: 'admin'};