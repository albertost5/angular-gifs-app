import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    // TODO: make the API call
    if (tag.trim().length === 0) return;

    const lowerCaseTag = tag.toLowerCase();

    this.validateAndAddTag(lowerCaseTag);
  }

  private validateAndAddTag(tag: string): void {
    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( t => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0,10);
  }

  constructor() { }
}
