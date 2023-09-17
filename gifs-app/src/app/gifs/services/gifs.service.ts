import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfases/gifs.interfases';

const GIPHY_API_KEY = 'ifENKtgLgB8thczt8cD2Yu93QYEKJxwT';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  constructor(
    private http : HttpClient
  ) { }

  private apiKey : string = 'ifENKtgLgB8thczt8cD2Yu93QYEKJxwT';
  private apiUrl : string = 'https://api.giphy.com/v1/gifs';
  private _searchHistory : string[] = [];

  public gifList : Gif[] = [];

  get getSearchHistory() {
    return [...this._searchHistory];
  }

  get getGifts() {
    return [...this.gifList];
  }


  public searchTag( tag : string ) : void {
    if ( tag.trim().length === 0 ) return;

    this.organizeHistory( tag );

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<SearchResponse>(`${this.apiUrl}/search`, { params }).subscribe( response => {
      this.gifList = response.data;
    });


  }


  private organizeHistory(tag : string) {
    tag = tag.trim().toLocaleLowerCase();

    if ( this._searchHistory.includes( tag ) ) {
      this._searchHistory = this._searchHistory.filter((oldTag) => (oldTag !== tag));
    }

    this._searchHistory.unshift( tag );
    this._searchHistory = this._searchHistory.splice( 0, 20 );

    localStorage.setItem('searchHistory', JSON.stringify(this._searchHistory));

  }





}
