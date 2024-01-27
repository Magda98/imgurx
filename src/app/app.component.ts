import { UserService } from './../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UserData } from './interfaces/interfaces';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    NgOptimizedImage,
    AngularQueryDevtools,
  ],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  isLoggedIn = false;
  userData?: UserData;
  username?: string;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.subscription.add(
      this.authService.keepUpToDateAccessToekn().subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUserData() {
    this.username = this.authService.username;
    if (this.username)
      this.subscription.add(
        this.userService.getUserData(this.username).subscribe((res) => {
          this.userData = res.data;
          this.isLoggedIn = true;
        })
      );
  }

  login() {
    this.authService.getAccessTokenUrl();
  }
}
