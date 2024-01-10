import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken?: string;
  username?: string;

  getAccessTokenUrl() {
    const client_id = '0c51d5eb5413529';
    const url = `https://api.imgur.com/oauth2/authorize?client_id=${client_id}&response_type=token`;
    window.location.href = url;
  }

  getAccessToken() {
    const url = window.location.hash.substring(1);
    console.log(
      '🚀 ~ file: auth.service.ts:17 ~ AuthService ~ getAccessToken ~ url:',
      url
    );
    this.accessToken =
      new URLSearchParams(url).get('access_token') ?? undefined;
    this.username =
      new URLSearchParams(url).get('account_username') ?? undefined;
  }
}
