import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-digimons-gallery',
  templateUrl: './digimons-gallery.component.html',
  styleUrls: ['./digimons-gallery.component.scss']
})
export class DigimonsGalleryComponent implements OnInit {

  @Input() digimons;

  constructor() { AOS.init()}

  ngOnInit(): void {
  }
}

