import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { levelEnum } from '../../consts/digimon-levels.const';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data;
  @Output() clickedXEmitter = new EventEmitter();

  levelEnum = levelEnum;

  constructor() { }

  ngOnInit(): void {
  }

  clickedXEmit($event, name){
    $event.stopPropagation();
    this.clickedXEmitter.emit(name);
  }




}
