import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, SearchResponse} from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = '1FynAAkCzMmLaQ1SWKbDPjW4YBVlbqj3';
  private basePath: string = 'https://api.giphy.com/v1/gifs';

  public giftList: Gif[] = [];

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    const lowerCaseTag = tag.toLowerCase();
    this.validateAndAddTag(lowerCaseTag);

    const params = new HttpParams({
      fromObject: {
        api_key: this.apiKey,
        q: tag,
        limit: 10
      }
    });
    // new HttpParams().set('key', 'value')...
    this.http.get<SearchResponse>(`${this.basePath}/search`, {params})
        .subscribe(({data}) => this.giftList = data);
  }

  private validateAndAddTag(tag: string): void {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0]);
    }
  }

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }
}
