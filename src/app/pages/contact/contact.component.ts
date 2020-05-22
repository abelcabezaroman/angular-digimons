import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userInfo = {};

  constructor() { }

  ngOnInit(): void {
  }

  saveForm(){
    console.log('##ABEL## >> ContactComponent >>  saveForm', this.userInfo);
  }
}
