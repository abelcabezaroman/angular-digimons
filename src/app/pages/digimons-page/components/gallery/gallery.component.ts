import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() list;
  @Output() fatherClickedXEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
