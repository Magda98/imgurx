import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserData(username: string) {
    return this.httpClient.get(`account/${username}`);
  }
}
