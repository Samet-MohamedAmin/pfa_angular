import { Injectable } from '@angular/core';
import { Route, Params, ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,
              private route:ActivatedRoute) { }

}

// TODO: fix this poor design. role admin must not be here
// TODO: use an array of objects of type `{RoleType: String}`
/**
 * contains roles identification
 */
export const ROLES = {student:'étudiant', professional: 'professionel', admin: 'admin'};

/**
 * role list from ROLES object.
 * contains ROLES keys.
 */
export const ROLE_LIST: string[] = Object.keys(ROLES);