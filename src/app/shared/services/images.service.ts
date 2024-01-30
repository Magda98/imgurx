import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { ApiResponse } from '../interfaces/response';
import { Image } from '../interfaces/interfaces';
import { createQuery } from '../utils/createQuery';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  #http = inject(HttpClient);

  getUserImages(page: Signal<number>) {
    return createQuery(
      ['images', { page: page() }] as const,
      this.#http.get<ApiResponse<Image[]>>(`/account/me/images/${page()}`)
    );
  }

  getImagesCount() {
    return createQuery(
      ['imagesCount'] as const,
      this.#http.get<ApiResponse<number>>(`/account/me/images/count`)
    );
  }
}
