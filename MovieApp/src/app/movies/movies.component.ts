import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class MoviesComponent {
  title = 'Movie list';

  movies: Movie[];

  selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {  //constructordan sonra ishe dushen ilk ngOnInit olur. ilk ishe dushmesini istediyimiz methodlari bunun icherisine yaziriq.
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie; //htmlden gelen sechilmish movie
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe((movies) => {  //methodun asinxron ishlemesi uchun bele yazilir
      this.movies = movies;
    });
  }

  add(name: string, imageUrl: string, description: string): void{
    this.movieService
      .add({
        //methodun ichine datalari  object olaraq yaradib gonderirik
        name,
        imageUrl,
        description,
      } as Movie)
      .subscribe((movie) => this.movies.push(movie));
    //yaratdigimiz objecti as Movie deyerek Movie tipine chevirmish oluruq.
  }

  delete(movie: Movie): void{
    this.movies= this.movies.filter(m => m!==movie);
    this.movieService.delete(movie).subscribe();

  }
}
