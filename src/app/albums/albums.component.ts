import { Component, inject, signal } from '@angular/core';
import { ImagesService } from '../shared/services/images.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { QueryStateComponent } from '../query-state/query-state.component';

@Component({
  selector: 'mx-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [ImagesService],
  standalone: true,
  imports: [QueryStateComponent],
})
export class AlbumsComponent {
  imagesService = inject(ImagesService);
  page = signal(0);
  albums = injectQuery(() => this.imagesService.getAlbums(this.page));
}
