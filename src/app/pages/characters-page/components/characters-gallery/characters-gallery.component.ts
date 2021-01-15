import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.scss']
})
export class CharactersGalleryComponent implements OnInit, OnChanges, OnDestroy {

  @Input() characters;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

  ngOnDestroy(){
    console.log('Destroy!')
  }

}
