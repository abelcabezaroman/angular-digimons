import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimons-list',
  templateUrl: './digimons-list.component.html',
  styleUrls: ['./digimons-list.component.scss']
})
export class DigimonsListComponent implements OnInit {

  @Input() digimons;

  constructor() { }

  ngOnInit(): void {
  }

}
