import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { ApiResponse } from '../interfaces/response';
import { Album, Image } from '../interfaces/interfaces';
import { createQuery } from '../utils/createQuery';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  #http = inject(HttpClient);
  #authService = inject(AuthService);

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

  getAlbums(page: Signal<number>) {
    return createQuery(
      ['albums', { page: page() }] as const,
      this.#http.get<ApiResponse<Album[]>>(
        `account/${this.#authService.username}/albums/${page()}`
      )
    );
  }
}
