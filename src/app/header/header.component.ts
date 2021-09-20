import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../window-size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public windowSize: WindowSizeService) { }

  ngOnInit(): void {
  }

}
