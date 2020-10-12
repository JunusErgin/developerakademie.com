import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  job = {};
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      let title = params['title'];
      this.job = this.jobService.findByTitle(title);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  apply() {
    let prefix = 'info@';
    window.open('mailto:' + prefix + 'developerakademie.com?subject=Bewerbung für die Stelle als ' + this.job['title']);
  }
}
