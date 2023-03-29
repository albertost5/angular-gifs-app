import { Component } from '@angular/core';

import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  constructor( private readonly gifsService: GifsService ) {}

  get gifsToDisplay(): Gif[] {
    return this.gifsService.gifsArr;
  }
}
