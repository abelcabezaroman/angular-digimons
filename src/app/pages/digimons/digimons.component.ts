import { Component, OnInit } from '@angular/core';
import { DigimonService } from "../../shared/services/digimon.service";
import { DigimonDataService } from "../../shared/services/local/digimonData.service";

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss']
})
export class DigimonsComponent implements OnInit {

  digimons: Array<any>;

  flagShowGallery = true;

  constructor(private digimonService: DigimonService, private digimonDataService: DigimonDataService) { }

  ngOnInit(): void {
    this.digimonService.getAll().subscribe((res: any) => {
      console.log(res);
      this.digimons = res;
      this.digimonDataService.setDigimons(res);
    })
  }

}
