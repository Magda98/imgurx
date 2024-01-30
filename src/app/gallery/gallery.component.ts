import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from '../shared/services/images.service';
import { Component, computed, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoadingErrorComponent } from '../loading-error/loading-error.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'mx-gallery',
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
  page = signal(0);
  readonly pageSize = 50;
  imagesService = inject(ImagesService);
  images = injectQuery(() => this.imagesService.getUserImages(this.page));
  public imagesCount = injectQuery(() => this.imagesService.getImagesCount());
  public maxPage = computed(() => {
    const data = this.imagesCount.data()?.data;
    return data ? Math.ceil(data / this.pageSize) - 1 : 0;
  });
  public imagesCounter = computed(() => {
    const currentPageSize = this.images.data()?.data.length;
    return currentPageSize
      ? this.page() * this.pageSize + currentPageSize
      : this.page() * this.pageSize;
  });

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
