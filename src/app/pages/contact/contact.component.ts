import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { DigimonDataService } from "../../shared/services/local/digimonData.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userInfo: any = {};

  formGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder,  private digimonDataService: DigimonDataService) { }

  ngOnInit(): void {
    console.log('##ABEL## >> ContactComponent >>  ngOnInit', this.digimonDataService.getDigimons());
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      doYouLike: ['', Validators.required],
      message: ['', Validators.required],
    });

    this.formGroup.valueChanges.subscribe(values => {
      console.log('##ABEL## >> ContactComponent >>  values', values);
    })
  }

  saveForm() {
    console.log('##ABEL## >> ContactComponent >>  saveForm', this.userInfo);
    console.log('##ABEL## >> ContactComponent >>  saveForm', this.formGroup);
    console.log('##ABEL## >> ContactComponent >>  saveForm', this.formGroup.value);
    this.isSubmited = true;
    if (this.formGroup.status === 'VALID') {
      alert();
    }
  }
}
