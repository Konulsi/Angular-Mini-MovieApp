import { MovieService } from './../movie.service';
import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  //localhost:4200/detail/2
  // formS: FormGroup

  @Input() movie: Movie; //chift tarafli two bind ishlemine gore yazilir

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) // private fb: FormBuilder
  {
    // this.formS = fb.group({
    //   inp: new FormControl('', Validators.required)
    // })
    // this.formS.value
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovie();
  }


  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //routerden gelen id parametrine el chatanliq olsun deye bunu yazmaq lazimdir. qarshisina + yaziriqki gelen id string gelir number e chevirmek uchun.
    this.movieService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }
  save(): void{
    this.movieService.update(this.movie)  //inputdan deyishiklik olduqda bind ishlemine gore bura son hali gelir. servisin ichine gonderilen son hali hut olur bazaya ve  deyishilir olur.
        .subscribe(()=>{
          this.location.back();
        })
  }
}
