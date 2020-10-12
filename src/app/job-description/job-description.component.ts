import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {
  @Input() job: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
