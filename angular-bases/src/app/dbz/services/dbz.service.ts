import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {

  constructor() { }


  public characters: Character[] = [];

  onNewCharacter(character: Character) : void {
    this.characters.push(character);
  }

  deleteCharacterById(id : String) : void {
    const _character = this.characters.find(character => character.id === id);

    let result = confirm('Se va a eliminar el personaje ' + _character?.name + ' con poder ' + _character?.power + ' y el id ' + _character?.id + '. ¿Está seguro?');

    if(result) {
        this.characters = this.characters.filter(character => character.id !== id);
    }

  }



}
