import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  charactersSubject = new ReplaySubject(1);

  constructor(private http: HttpClient) { }


  nextCharacters(characters) {
    this.charactersSubject.next(characters);
  }

  observableCharacters(){
    return this.charactersSubject;
  }

  getCharacters() {
    return this.http.get(environment.backUrl + 'characters')
  }

  deleteCharacter(name) {
    return this.http.delete(environment.backUrl + 'characters/' + name)
  }
}
