import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AlbumsComponent } from './albums/albums.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'gallery',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
];
