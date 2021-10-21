import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from 'src/app/window-size.service';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {

  constructor(public windowSize: WindowSizeService) { }

  ngOnInit(): void {
    
  }

}
