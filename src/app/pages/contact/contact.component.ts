import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userInfo: any = {};

  formGroup;
  isSubmited = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
