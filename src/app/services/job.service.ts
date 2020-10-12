import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  public jobs = [
    {
      "category": "Engineering",
      "title": "Senior Frontend Engineer",
      "description": "",
      "requirements": ["Du sprichst Deutsch als Muttersprache", "Du hast sehr gute Kenntnisse in HTML, CSS und JavaScript.", "Du hast Spaß daran, motivierte Programmieranfänger zu coachen"],
      "optional_requirements": ["Du kennst dich mit einem JS-Framework (Angular, React, Vue) aus."],
      "normal_day": ["Du coachst Programmieranfänger", "Du betreust Software-Projekte von kleinen Gruppen", "Du wirkst aktiv bei externen Software-Aufträgen mit", "Du gestaltest unseren Lehrplan aktiv mit und hilfst dabei, diesen zu optimieren."],
      "fulltime": ["Vollzeit"]
    }
  ];

  constructor() { }

  public getJobs(category): Array<any> {
    return this.jobs.filter(job => job.category == category);
  }
}
