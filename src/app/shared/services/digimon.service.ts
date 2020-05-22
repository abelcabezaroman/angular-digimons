import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(environment.url);
  }

  getDigimon(digimonName) {
    return this.httpClient.get(environment.url + '/name/' + digimonName);
  }
}
