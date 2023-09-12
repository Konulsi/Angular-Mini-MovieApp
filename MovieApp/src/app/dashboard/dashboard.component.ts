import { MovieService } from './../movie.service';
import { Component } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  movies: Movie[] = [];
  movieLength: number;

  constructor(private movieService: MovieService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(movies=> {
      this.movies = movies.slice(0,3)
      this.movieLength = movies.length;
    })
  }

}
