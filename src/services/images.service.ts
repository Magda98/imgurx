import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { ApiResponse } from '../app/interfaces/response';
import { Image } from '../app/interfaces/interfaces';
import { createQuery } from '../app/utils/createQuery';

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
}
