import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/components/loader/services/loader.service';
import { DigimonsService } from 'src/app/shared/services/digimons.service';

@Component({
  selector: 'app-digimons-page',
  templateUrl: './digimons-page.component.html',
  styleUrls: ['./digimons-page.component.scss']
})
export class DigimonsPageComponent implements OnInit {

  digimons;

  constructor(private digimonsService: DigimonsService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getDigimons()
  }

  getDigimons() {
    this.loaderService.nextIsLoading(true);
    this.digimonsService.getDigimons().subscribe(digimons => {
      this.loaderService.nextIsLoading(false);
      this.digimons = digimons;
    })
  }

  removeDigimon(name) {
    this.digimonsService.deleteDigimon(name).subscribe(() => {
      // this.getDigimons()
      this.removeLocalDigimon(name);
    });
  }

  removeLocalDigimon(name) {
    this.digimons = this.digimons.filter(digimon => digimon.name !== name);
  }

}
