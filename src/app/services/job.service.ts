import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  public jobs = [
    {
      "category": "Engineering",
      "title": "Front End -Entwickler (Web)",
      "description": "In diesem Job verwandelst du Programmierneulinge in Profis. Du unterrichtest Studenten in Themen, wie JavaScript, OOP, REST APIs und Angular. Nebenbei hilfst du unseren Lehrplan stetig zu optimieren und der aktuellen Marktsituation anzupassen. Da unsere Studenten teilweise Praxisprojekte entwickeln, unterstützt du auch hier und sorgst für eine gute Architektur und das Einhalten von gängigen Codeprinzipien. ",
      "requirements": ["Du sprichst Deutsch als Muttersprache", "Du hast sehr gute Kenntnisse in HTML, CSS und JavaScript.", "Du hast Spaß daran, motivierte Programmieranfänger zu coachen"],
      "optional_requirements": ["Du kennst dich mit einem JS-Framework (Angular, React, Vue) aus."],
      "normal_day": ["Du coachst Programmieranfänger", "Du betreust Software-Projekte von kleinen Gruppen", "Du wirkst aktiv bei externen Software-Aufträgen mit", "Du gestaltest unseren Lehrplan aktiv mit und hilfst dabei, diesen zu optimieren."],
      "fulltime": "Vollzeit"
    },
    {
      "category": "Engineering",
      "title": "Junior Web Development Coach",
      "description": "Wir suchen noch einen motivierten Werkstudenten mit Programmiererfahrung zur punktuellen Unterstützung für unser Coaching-Team beim Online-Support unserer Kunden & Studenten.",
      "requirements": ["Du sprichst Deutsch mindestens auf C1-Niveau", "Du kannst gut erklären und hast Spaß daran", "Du hast sehr gute Kenntnisse in HTML, CSS und kannst JavaScript", "Begriffe wie \"Flexbox\" und \"Position: absolute\" sind für dich keine Fremdwörter", "Du willst einen Startup-Alltag kennenlernen und dich auch als Programmierer weiterentwickeln", "Du hast Freude daran, Menschen eine tolle zweite Karriere zu ermöglichen"],
      "optional_requirements": [],
      "normal_day": ["Du bringst Programmieranfängern online über Video-Calls programmieren bei und verbesserst mit Ihnen zusammen ihre Hausaufgaben", "Du betreust Software-Projekte von kleinen Gruppen", "Du hilfst dabei, Fragen in unserem Support-Chat zu beantworten", "Du denkst dir eigene kleine Projekte aus, die unsere Lehre noch weiter verbessern"],
      "fulltime": "Werkstudent / Teilzeit"
    },
    {
      "category": "Office",
      "title": "Backoffice Manager",
      "description": "In diesem Job assistierst du der Geschäftsführung bei diversen Aufgaben, die täglich anfallen. Das erstreckt sich vom Senden einer Postkarte bis hin zu Kundengesprächen.",
      "requirements": ["Du sprichst sehr gut Deutsch", "Du bist ein sehr organisierter Mensch", "Excel, Word und Powerpoint sind kein Frendwort für dich", "Du hast Spaß daran in einer Statup-Athmosphäre zu arbeiten"],
      "optional_requirements": ["Du bist ein offener und kommunikativer Mensch", "Du hast schon einmal von HTML, CSS oder SCRUM gehört"],
      "normal_day": ["Du telefonierst mit potentiellen Kunden und bringst in Erfahrung, ob unsere Ausbildung den Interessenten helfen kann", "Du unterstützt die Firma im Accounting", "Du übernimmst diverse Verwaltungsaufgaben"],
      "fulltime": "Vollzeit"
    },
    {
      "category": "Marketing",
      "title": "Video cutter",
      "description": "In diesem Job bist du dafür verantwortlich, unsere Lehrvideos zu schneiden und zu editieren. Dies umfasst sowohl unser internes E-Learning Portal als auch Videos für YouTube und TikTok.",
      "requirements": ["Du sprichst sehr gut Deutsch", "Du kennst dich mit grundlegenden Effekten aus (Schärfe, Helligkeit, Kontrast)", "Erfahrungen mit Adobe Premiere Pro, DaVinci Resolve, Sony Vegas Pro o. Ä."],
      "optional_requirements": ["Du brinst ein gesundes Maß an Kreativität mit", "Du kannst kleine Grafiken mit Graphen und Einblendungen anfertigen"],
      "normal_day": ["Wir besprechen die nächsten Videos", "Du erhälst von uns die Audio- und Videospur", "Du erstellst selbstverantwortlich einen großartigen Clip"],
      "fulltime": "Teilzeit / Werkstudent / 450€"
    }
  ];

  constructor() { }

  public getJobs(category: string): Array<any> {
    return this.jobs.filter(job => job.category == category);
  }

  public findByTitle(title) {
    return this.jobs.find(job => job.title == title);
  }
}
