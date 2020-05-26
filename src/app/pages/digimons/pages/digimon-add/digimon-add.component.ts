import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { DigimonDataService } from "../../../../shared/services/local/digimonData.service";

@Component({
  selector: 'app-add',
  templateUrl: './digmon-add.component.html',
  styleUrls: ['./digimon-add.component.scss']
})
export class DigimonAddComponent implements OnInit {

  formGroup;

  constructor(private formBuilder: FormBuilder, private digimonDataService: DigimonDataService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', Validators.required],
        img: ['https://vignette.wikia.nocookie.net/digimon/images/0/02/WarGreymon_vg.gif/revision/latest/top-crop/width/220/height/220?cb=20081231092447', Validators.required],
        level: ['', Validators.required]
      }
    )
  }

  saveDigimon() {
    if (!this.formGroup.errors) {
      const digimons = this.digimonDataService.getDigimons();
      digimons.push(this.formGroup.value);
      this.digimonDataService.setDigimons(digimons)
    }
  }
}
