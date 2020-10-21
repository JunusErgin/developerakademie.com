import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.scss']
})
export class ProcessStepComponent implements OnInit, OnDestroy {
  @Input() headline = '';
  static count: number = 0;
  instanceNumber = 0;


  constructor() {
    this.instanceNumber = ++ProcessStepComponent.count;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    --ProcessStepComponent.count;
  }

}
