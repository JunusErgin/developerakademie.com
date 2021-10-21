import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() img = '';
  @Input() title = '';
  @Input() height = '180px';
  @Input() objectPosition = 'center';
  @Input() width = '100%';


  constructor() { }

  ngOnInit(): void {
  }

}
