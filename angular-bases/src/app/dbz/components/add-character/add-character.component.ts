import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})


export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  private names = ["John", "Alice", "Bob", "Eva", "Michael", "Olivia"];

  getRandomName() {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    return this.names[randomIndex];
  }


  public character: Character = {
    id: uuid(),
    name: this.getRandomName(),
    power: Math.random() * 50
  };

  emitCharacter() {

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: uuid(),
      name: this.getRandomName(),
      power: Math.random() * 2
    };

  }





}
