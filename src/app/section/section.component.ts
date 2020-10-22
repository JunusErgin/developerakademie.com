import { FunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() graybg = false;
  @Input() headline = '';
  @Input() padding = false;
  @Input() alignLeft = false;

  constructor() { }

  ngOnInit(): void {
  }
}
