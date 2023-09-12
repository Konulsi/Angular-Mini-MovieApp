import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export default class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const movies = [
      {
        id: 1,
        name: ' movie 1',
        description: 'guzel film',
        imageUrl: 'img1.webp',
      },
      {
        id: 2,
        name: ' movie 2',
        description: 'guzel film',
        imageUrl: 'img2.jpg',
      },
      {
        id: 3,
        name: ' movie 3',
        description: 'guzel film',
        imageUrl: 'img3.jpg',
      },
      {
        id: 4,
        name: ' movie 4',
        description: 'guzel film',
        imageUrl: 'img4.jpg',
      },
      {
        id: 5,
        name: ' movie 5',
        description: 'guzel film',
        imageUrl: 'img5.webp',
      },
    ];
    return {movies};
  }
  constructor() { }
}
