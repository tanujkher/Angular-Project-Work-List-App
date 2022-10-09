import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../services/media-item.service';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent implements OnInit {
  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItemService.get().subscribe((data) => {
      console.log(data);
    });
  }
}
