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
}
