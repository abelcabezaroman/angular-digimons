import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/components/loader/services/loader.service';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {

  characters;
  charactersSubscription;
  
  constructor(private charactersService: CharactersService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService.observableCharacters().subscribe(characters => {
      this.characters = characters;
    });
    this.getCharacters();
  }

  getCharacters() {
    this.loaderService.nextIsLoading(true);
    this.charactersService.getCharacters().subscribe(characters => {
      this.loaderService.nextIsLoading(false);
      this.charactersService.nextCharacters(characters);
    })
  }

  ngOnDestroy(){
    this.charactersSubscription.unsubscribe()
  }

}
