import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  static getRandomNumber(min:number, max: number):number{
    return Math.floor(Math.random()*(max - min))+min;
  }

  static getRandomObject(list: any[]){
    return list[this.getRandomNumber(0, list.length)]
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
