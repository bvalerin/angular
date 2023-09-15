import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 5000
    },
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 8500
    }];

    onNewCharacter(character: Character) : void {
      this.characters.push(character);
    }


}
