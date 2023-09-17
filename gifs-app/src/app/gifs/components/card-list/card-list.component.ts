import { Component, Input } from '@angular/core';
import { Gif } from '../../interfases/gifs.interfases';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent {

  constructor() { }


  @Input()
  public currentSearch : string = '';

  @Input()
  public gifs : Gif[] = [];

}
