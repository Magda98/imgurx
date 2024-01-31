import { Component, inject, signal } from '@angular/core';
import { ImagesService } from '../shared/services/images.service';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'mx-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [ImagesService],
})
export class AlbumsComponent {
  imagesService = inject(ImagesService);
  page = signal(0);
  albums = injectQuery(() => this.imagesService.getAlbums(this.page));
}
