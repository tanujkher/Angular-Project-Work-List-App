import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<MediaItemResponse>('mediaitems').pipe(
      map((response: MediaItemResponse) => {
        return response.mediaItems;
      })
    );
  }
}

interface MediaItems {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavourite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItems[];
}
