import { Component, OnInit } from '@angular/core';
import { DigimonService } from "../../shared/services/digimon.service";

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss']
})
export class DigimonsComponent implements OnInit {

  digimons: Array<any>;

  flagShowGallery = true;

  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {
    this.digimonService.getAll().subscribe((res: any) => {
      console.log(res);
      this.digimons = res;
    })
  }

}
