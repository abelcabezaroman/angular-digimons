import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigimonDataService {

  digimonsData = [];

  constructor() { }

  // set digimons(newDigimons) {
  //   this.digimonsData = newDigimons;
  // }
  //
  // get digimons() {
  //   return this.digimonsData;
  // }


  setDigimons(newDigimons) {
    this.digimonsData = newDigimons;
  }

  getDigimons() {
    return this.digimonsData;
  }
}
