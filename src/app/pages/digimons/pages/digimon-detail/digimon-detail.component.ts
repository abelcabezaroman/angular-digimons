import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DigimonService } from "../../../../shared/services/digimon.service";

@Component({
  selector: 'app-digimon-detail',
  templateUrl: './digimon-detail.component.html',
  styleUrls: ['./digimon-detail.component.scss']
})
export class DigimonDetailComponent implements OnInit {

  digimonName: string;
  digimons;

  constructor(private activatedRoute: ActivatedRoute, private digimonService: DigimonService) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.digimonName) {
        this.digimonName = params.digimonName;
      }
    });
  }

  ngOnInit(): void {
    this.digimonService.getDigimon(this.digimonName).subscribe(digimons => {
      this.digimons = digimons;
    })
  }

}
