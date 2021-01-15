import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: any = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.observableIsLoading().subscribe(isLoading => {
      console.log(isLoading)
      this.isLoading = isLoading;
    });
  }

}
