import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  innerWidth: any;
  selectorWidth = 150;
  selected = 0;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.calculateSelectorWidth();
  }

  select(index: number) {
    this.selected = index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.calculateSelectorWidth();
  }

  calculateSelectorWidth() {
    this.selectorWidth = this.innerWidth <= 850 ? 100 : 150;
  }
}
