import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Find:</h5>
    <input
      type='text'
      class='form-control'
      placeholder='Find gif..'
      (keyup.enter)='searchTag()'
      #textTagInput>
  `
})
export class SearchBoxComponent {
  @ViewChild('textTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  searchTag() {
    this.gifsService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }

  constructor(private gifsService: GifsService) {
  }
}
