import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimons-table-basic',
  templateUrl: './digimons-table-basic.component.html',
  styleUrls: ['./digimons-table-basic.component.scss']
})
export class DigimonsTableBasicComponent implements OnInit {

  @Input() digimons: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
