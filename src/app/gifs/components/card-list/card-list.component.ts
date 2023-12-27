import {Component, Input} from '@angular/core';
import {Gif} from '../../interfaces/search.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  gifsList: Gif[] = [];
}
