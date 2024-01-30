import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/interfaces';
import { ApiResponse } from '../interfaces/response';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserData(username: string) {
    return this.httpClient.get<ApiResponse<UserData>>(`account/${username}`);
  }
}
