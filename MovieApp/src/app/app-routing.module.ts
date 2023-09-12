import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  //router linkleri yaradiriq
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //url bosh gederse bir basha dashboarda getsin deye. bele yazmaq evezine component: DashboardComponent yaza bilerik
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent }, //yeni, url-den 4200/movies yazdiqda moviesComponente getsin deye bele yaziriq.
  { path: 'detail/:id', component: MovieDetailComponent }
];

@NgModule({
  exports: [RouterModule], //routermodulu appmodul istifade edeceyi uchun export edirik
  imports: [RouterModule.forRoot(routes)]  //yuxarida teyin etdiyimiz router linleri import edirik
})
export class AppRoutingModule { }
