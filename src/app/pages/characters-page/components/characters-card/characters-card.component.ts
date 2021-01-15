import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {

  @Input() character;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

  removeCharacter(name) {
    this.charactersService.deleteCharacter(name).subscribe(() => {
      this.charactersService.getCharacters().subscribe(characters => {
        this.charactersService.nextCharacters(characters);
      });
    });
  }



}
