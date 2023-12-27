import {Component} from '@angular/core';
import {GifsService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/search.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  get gifsList(): Gif[] {
    return this.gifsService.giftList;
  }
  constructor(private gifsService: GifsService) {
  }
}
