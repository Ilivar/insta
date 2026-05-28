import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Legal } from './legal/legal';

export const routes: Routes = [
   {
    path: '',
    component: MainPage
  }, {
    path: 'legal',
    component: Legal,
  }
];
