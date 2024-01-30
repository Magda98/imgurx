import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken = new BehaviorSubject<string | null>(null);
  username?: string;
  private readonly tokenStorageKey = 'token';
  private readonly usernameStorageKey = 'username';

  constructor(private storage: StorageService) {
    const token = this.storage.getData(this.tokenStorageKey);
    const username = this.storage.getData(this.usernameStorageKey);
    this.username = username;
    this.accessToken.next(token);
  }

  keepUpToDateAccessToekn() {
    return this.accessToken.asObservable().pipe(
      tap((token) => {
        if (token) {
          this.storage.setData(this.tokenStorageKey, token);
        }
      })
    );
  }

  getAccessTokenUrl() {
    const client_id = '0c51d5eb5413529';
    const url = `https://api.imgur.com/oauth2/authorize?client_id=${client_id}&response_type=token`;
    window.location.href = url;
  }

  getAccessToken() {
    const url = window.location.hash.substring(1);
    const token = new URLSearchParams(url).get('access_token') ?? undefined;
    this.username =
      new URLSearchParams(url).get('account_username') ?? undefined;
    this.storage.setData(this.usernameStorageKey, this.username);
    if (token) this.accessToken.next(token);
  }
}
