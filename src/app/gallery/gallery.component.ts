import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from '../shared/services/images.service';
import {
  Component,
  OnInit,
  Signal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoadingErrorComponent } from '../loading-error/loading-error.component';
import { IconComponent } from '../icon/icon.component';
import { QueryStateComponent } from '../query-state/query-state.component';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { LightboxDirective } from 'ng-gallery/lightbox';

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
    QueryStateComponent,
    LightboxDirective,
  ],
  providers: [ImagesService],
  standalone: true,
})
export class GalleryComponent {
  page = signal(0);
  readonly pageSize = 50;
  imagesService = inject(ImagesService);
  ngGallery = inject(Gallery);
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

  items: Signal<GalleryItem[]> = computed(() => {
    const images = this.images.data()?.data;
    if (!images) return [];
    return images.map(
      (item) => new ImageItem({ src: item.link, thumb: item.link })
    );
  });

  galleryEffect = effect(() => {
    this.ngGallery.ref().load(this.items());
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

  /**
   * TODO:
   * show: images tags,
   * handle add to favorites,
   * show add date,
   */
}
