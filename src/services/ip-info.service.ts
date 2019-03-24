import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IpInfoService {
  private url ='https://ipinfo.io/json/?token=f16c5cd003fb56';

  constructor(private http: Http) {}

  getIpInfo(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(response => response.json())
    );
  }
}