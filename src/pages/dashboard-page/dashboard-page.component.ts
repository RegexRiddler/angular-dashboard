import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvilInsultService } from './../../services/evil-insult.service';
import { IpInfoService } from 'src/services/ip-info.service';
import { RandomJokeService } from 'src/services/random-joke.service';
import { XkcdService } from 'src/services/xkcd.service';

import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
  providers: [EvilInsultService, IpInfoService, RandomJokeService, XkcdService]
})

export class DashboardPageComponent implements OnInit {
  public weatherDetail: Array<any>;
  public evilInsult: string;
  public ipInfo: number;
  public randomJoke: string;
  public xkcdComic: Object;

  constructor(
    protected router: Router,
    protected evilInsultService: EvilInsultService, 
    protected ipInfoService: IpInfoService, 
    protected randomJokeService: RandomJokeService,
    protected xkcdService: XkcdService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.evilInsultService.getEvilInsult()
    .subscribe(
      insult => {
        this.evilInsult = insult.insult;
      }
    )

    this.ipInfoService.getIpInfo()
    .subscribe(
      info => {
        this.ipInfo = info;
      }
    )
    
    this.randomJokeService.getRandomJoke()
    .subscribe(
      joke => {
        this.randomJoke = joke.value.joke;
      }
    )

    this.xkcdService.getXkcdComic()
    .subscribe(
      comic => {
        this.xkcdComic = comic;
      }
    )
    
  }
}
