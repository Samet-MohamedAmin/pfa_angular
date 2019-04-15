import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  /**
   * returns a random integer value between `min` and `max`
   * ie: returns random value where _value >= `min`_ and _value < `max`_
   * @param min minimum random value
   * @param max maximum random value
   */
  static getRandomNumber(min:number, max: number):number{
    return Math.floor(Math.random()*(max - min))+min;
  }

  /**
   * returns a random object from `list`
   * @param list input list
   */
  static getRandomObject(list: any[]){
    return list[this.getRandomNumber(0, list.length)]
  }

  /**
   * returns a shuffled object from `list`
   * @param list list to shuffle
   */
  static shuffleObject(list: any[]){
    let listCopy = [...list];
    let newList = [];
    for(let i=0; i<list.length; i++)
      newList.push(...listCopy.splice(SharedService.getRandomNumber(0, list.length - i), 1));
    return newList;
  }

}

export const IMAGE_SRC_BASE = 'assets/images/'
export const IMAGES = {
  chemistry: 'chemistry_01.jpg',
  circuit: 'circuit_01.jpg',
  computer: 'computer_01.jpg',
  maintenance: 'maintenance_01.jpg',
  microscope: 'microscope_01.jpg',
  network: 'network_01.jpg'
};

export type BranchType = 'GL' | 'RT' | 'IIA' | 'IMI' | 'CH' | 'BIO';
export const BRANCHES = {GL: 'Génie Logiciel',
                          RT: 'Réseau et Télécommunication',
                          IIA: 'Informatique Industriel et Automatique',
                          IMI: 'Instrumentation et Maintenance Industriel',
                          CH: 'Chimie',
                          BIO: 'Biologie'}

export const BRANCH_LIST: BranchType[] = ['GL', 'RT', 'IIA', 'IMI', 'CH', 'BIO'];