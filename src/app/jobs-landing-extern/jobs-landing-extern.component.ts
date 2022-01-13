import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-landing-extern',
  templateUrl: './jobs-landing-extern.component.html',
  styleUrls: ['./jobs-landing-extern.component.scss']
})
export class JobsLandingExternComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://karriere.developerakademie.com/';
  }

}
