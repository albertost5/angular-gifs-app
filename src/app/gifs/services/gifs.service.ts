import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey: string = '1FynAAkCzMmLaQ1SWKbDPjW4YBVlbqj3';

  public gifsArr: Gif[] = [];


  constructor( private readonly httpClient: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.gifsArr = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get history(): string[] {
    return [...this._history];
  }

  addGif(query: string): void {
    const queryLowerCase = query.toLocaleLowerCase().trim();

    if ( !this._history.includes(queryLowerCase) ) {
      this._history.unshift( queryLowerCase );
      this._history = this._history.splice(0,10);
      localStorage.setItem('history', JSON.stringify( this._history ) );
    }

    console.log('history => ', this._history);

    this.httpClient.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.apiKey }&q=${ query }&limit=10`)
      .subscribe( ({data}) => {
        this.gifsArr = data; 
        localStorage.setItem('results', JSON.stringify(data));
      });
  }
}
