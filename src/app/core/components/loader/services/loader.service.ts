import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoadingSubject = new ReplaySubject(1);

  constructor() { }

  nextIsLoading(newIsLoadingValue) {
    this.isLoadingSubject.next(newIsLoadingValue)
  }

  observableIsLoading(){
    return this.isLoadingSubject;
  }


}
