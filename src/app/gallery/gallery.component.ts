import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from './../../services/images.service';
import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoadingErrorComponent } from '../loading-error/loading-error.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [
    HttpClientModule,
    NgOptimizedImage,
    SpinnerComponent,
    LoadingErrorComponent,
    IconComponent,
  ],
  providers: [ImagesService],
  standalone: true,
})
export class GalleryComponent {
  page = signal(1);
  imagesService = inject(ImagesService);
  images = injectQuery(() => this.imagesService.getUserImages(this.page));

  reloadData() {
    this.images.refetch();
  }

  nextPage() {
    this.page.update((v) => v + 1);
  }

  prevPage() {
    this.page.update((v) => v - 1);
  }
}
