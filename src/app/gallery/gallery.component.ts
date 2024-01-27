import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from './../../services/images.service';
import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [HttpClientModule, NgOptimizedImage],
  providers: [ImagesService],
  standalone: true,
})
export class GalleryComponent {
  page = signal(1);
  imagesService = inject(ImagesService);
  images = injectQuery(() => this.imagesService.getUserImages(this.page));

  nextPage() {
    this.page.update((v) => v + 1);
  }

  prevPage() {
    this.page.update((v) => v - 1);
  }
}
