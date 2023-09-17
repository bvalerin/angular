import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {

  constructor(
    private gifsService : GifsService
  ) { }

  @ViewChild('searchInput') txtSearch! : ElementRef<HTMLInputElement>;
  public searchInput : string = '';

  searchTag() {
    const newTag = this.txtSearch.nativeElement.value;
    this.gifsService.searchTag( newTag );
    this.txtSearch.nativeElement.value = '';
  }

}
