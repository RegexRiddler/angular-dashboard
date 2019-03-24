import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class XkcdService {
  private url ='https://xkcd.com/info.0.json';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) {}

  getXkcdComic(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => response.json())
    );
  }
}
