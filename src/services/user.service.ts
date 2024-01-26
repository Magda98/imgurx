import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../app/interfaces/interfaces';
import { ApiResponse } from '../app/interfaces/response';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserData(username: string) {
    return this.httpClient.get<ApiResponse<UserData>>(`account/${username}`);
  }
}
