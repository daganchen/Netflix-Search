import { Movie } from '../entities/movie';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://netflixroulette.net/api/api.php?';
@Injectable()
export class DataService {
  url: string;
  constructor(private http: Http) { }

  getMoviesBySearchQuery(searchQuery: string, searchBy: string = 'actor='): Observable<Movie[]> {
    this.url = `${BASE_URL}${searchBy}${searchQuery}`;
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
