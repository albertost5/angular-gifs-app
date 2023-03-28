import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _history: string[] = [];


  get history(): string[] {
    return [...this._history];
  }

  addGif(query: string): void {
    const queryLowerCase = query.toLocaleLowerCase();

    if ( !this._history.includes(queryLowerCase) ) {
      this._history.unshift( queryLowerCase );
      this._history = this._history.splice(0,10);
    }

    console.log(this._history);
  }

}
