import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  constructor(private http: HttpClient) { }

  getDigimon(name){
    return this.http.get(environment.backUrl + 'digimons/' + name)
  }

  getDigimons(){
    return this.http.get(environment.backUrl + 'digimons')
  }

  postDigimon(newDigimon){
    return this.http.post(environment.backUrl + 'digimons', newDigimon)
  }

  deleteDigimon(name){
    return this.http.delete(environment.backUrl + 'digimons/' + name)
  }
}
