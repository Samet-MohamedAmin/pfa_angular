import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

constructor() { }

}

export const BRANCHES = {GL: 'Génie Logiciel',
                          RT: 'Réseau et Télécommunication',
                          IIA: 'Informatique Industriel et Automatique',
                          IMI: 'Instrumentation et Maintenance Industriel',
                          CH: 'Chimie',
                          BIO: 'Biologie'}
export const BRANCH_LIST = Object.keys(BRANCHES);