import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RandomJokeService {
  private url ='http://api.icndb.com/jokes/random';

  constructor(private http: Http) {}

  getRandomJoke(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(response => response.json())
    );
  }
}
