import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://consent.cookiebot.com/e2564c46-20a0-42c7-b51d-b7172eadc5de/cd.js';
    document.getElementById('my-cookie-section').appendChild(s);
  }

}
