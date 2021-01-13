import { Component, OnInit } from '@angular/core';
import { DigimonsService } from 'src/app/shared/services/digimons.service';

@Component({
  selector: 'app-digimons-page',
  templateUrl: './digimons-page.component.html',
  styleUrls: ['./digimons-page.component.scss']
})
export class DigimonsPageComponent implements OnInit {

  digimons;

  constructor(private digimonsService: DigimonsService) { }

  ngOnInit(): void {
    this.digimonsService.getDigimons().subscribe(digimons => {
      this.digimons = digimons;
    })
  }
}
