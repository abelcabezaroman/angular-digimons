import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DigimonsService } from 'src/app/shared/services/digimons.service';

@Component({
  selector: 'app-add-digimon-page',
  templateUrl: './add-digimon-page.component.html',
  styleUrls: ['./add-digimon-page.component.scss']
})
export class AddDigimonPageComponent implements OnInit {

  addDigimonForm;

  levelList = ['Fresh', 'In Training', 'Rookie', 'Champion', 'Ultimate', 'Mega']
  imageUrl;

  constructor(private formBuilder: FormBuilder, private digimonsService: DigimonsService) { }

  ngOnInit(): void {
    this.addDigimonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
      img: ['', [Validators.required]],
    })
  }

  file(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e: any) => res(e.target.result);
      reader.onerror = (e: any) => rej(e);
      reader.readAsDataURL(file);
    });
  };

  async preview(event) {
    const file = event.target.files[0];
    const url = await this.file(file);
    this.imageUrl = url;
  }

  addDigimon() {
    const newDigimon = { ...this.addDigimonForm.value, img: this.imageUrl }
    this.digimonsService.postDigimon(newDigimon).subscribe();
  }
}
