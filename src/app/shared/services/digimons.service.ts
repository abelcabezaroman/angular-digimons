import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  constructor(private http: HttpClient) { }

  getDigimons(){
    return this.http.get('http://localhost:3000/digimons')
  }

  postDigimon(newDigimon){
    return this.http.post('http://localhost:3000/digimons', newDigimon)
  }

  deleteDigimon(name){
    return this.http.delete('http://localhost:3000/digimons/' + name)
  }
}
