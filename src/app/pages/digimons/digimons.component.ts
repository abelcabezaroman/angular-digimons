import { Component, OnDestroy, OnInit } from '@angular/core';
import { DigimonService } from "../../shared/services/digimon.service";
import { DigimonDataService } from "../../shared/services/local/digimonData.service";

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss']
})
export class DigimonsComponent implements OnInit, OnDestroy {

  digimons: Array<any>;

  flagShowGallery = true;
  //
  // digimonService$Subscription;

  // constructor(private digimonService: DigimonService, private digimonDataService: DigimonDataService) { }
  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {
    this.digimonService.getAll().subscribe((res: any) => {
      console.log('##ABEL## >> DigimonsComponent >>  res', res);
      this.digimons = res;
    })


    //
    // this.digimons = this.digimonDataService.getDigimons();
    //
    // if (!this.digimons.length) {
    //   this.digimonService$Subscription = this.digimonService.getAll().subscribe((res: any) => {
    //     console.log(res);
    //     this.digimons = res;
    //     this.digimonDataService.setDigimons(this.digimons);
    //   })
    // }

  }

  ngOnDestroy() {
    // if (this.digimonService$Subscription) {
    //   this.digimonService$Subscription.unsubscribe();
    // }
  }

}
