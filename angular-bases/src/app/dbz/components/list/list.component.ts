import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<String> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  onDelete(id : String) : void {
    this.onDeleteCharacter.emit(id);
  }

}
