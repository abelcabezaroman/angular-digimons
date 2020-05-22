import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimons-table',
  templateUrl: './digimons-table.component.html',
  styleUrls: ['./digimons-table.component.scss']
})
export class DigimonsTableComponent implements OnInit {

  cars = [
    {name:'Mazda 6', brand: 'Mazda'},
    {name:'Mitsubishi lancer', brand: 'Mitsubishi'},
    {name:'Mercedez CLK', brand: 'Mercedes'},
    {name:'Audi A6', brand: 'Audi'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
