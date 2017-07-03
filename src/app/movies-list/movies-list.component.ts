import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Movie } from '../entities/movie';
import { DataService } from '../service/data.service';
import { NavComponent } from '../shared/nav/nav.component';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any[];
  errorMessage: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }
  valueChange(newValue) {
    if (newValue.length > 5) {
      this.dataService.getMoviesBySearchQuery(newValue).subscribe(
        movie => this.movies = movie,
        error => this.errorMessage = <any>error)
    }
  }
  //   valueChangeUsingPromise(newValue) {
  //   if(newValue.length > 5)
  //  this.dataService.getMoviesBySearchQuery(newValue).then(
  //                    movie => this.movies = movie)
  // }
}
