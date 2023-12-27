import {Component} from '@angular/core';
import {GifsService} from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get terms(): string[] {
    return this.gifsService.tagsHistory;
  }

  onSearchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }

  constructor(private gifsService: GifsService) {
  }
}
