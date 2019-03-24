import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EvilInsultService {
  private url ='https://evilinsult.com/generate_insult.php?lang=en&type=json';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) {}

  getEvilInsult(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => response.json())
    );
  }
}