import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent implements OnInit {
  testimonials = [];
  currentImage = 0;
  autoSlide = true;

  constructor() { }

  ngOnInit(): void {
    this.testimonials.push({
      offset: '-90px',
      name: 'David',
      image: 'david',
      text: 'Bereits nach 2 Monaten Coaching hat David ein Niveau erreicht, bei dem er schon als Web-Programmierer arbeiten kann. Er baut dabei mithilfe von JavaScript, CSS und HTML gerade zwei Webseiten für private Kunden (ein Notariat und eine Anwaltskanzlei). Aktuell lernt er bei der Developer Akademie noch das Angular Framework, um danach dauerhaft als Freelancer in der IT Fuß zu fassen.'
    }, {
      offset: '0',
      name: 'Janani',
      image: 'janani',
      text: 'Nach einer nebenberuflichen Zusammenarbeit über 5 Monate, hat Janani mit Unterstützung der Developer Akademie den Einstieg in ein digitales Unternehmen in Dubai als Analytics-Managerin geschafft. Dort verbindet Janani IT-Kompetenz mit digitaler Marketing-Erfahrung.'
    });

    if (this.autoSlide) {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.testimonials.length;
      }, 10000);
    }
  }

  lastImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  nextImage() {
    if (this.testimonials.length > (this.currentImage + 1)) {
      this.currentImage++;
    }
  }

}

/**
 * ,
      {
        offset: '0',
        name: 'Atila',
        image: 'atila',
        text: 'Atila hatte u.a. auch noch andere konkrete Optionen im gesamten Bundesgebiet. Zum Beispiel in Bremen oder in Frankfurt oder auch Remote. Atila hat sich dann dazu entschieden bei einer Softwareagentur in München, die Partner der Deveoper Akademie ist, als Junior Entwickler zu starten.'
      },
      {
        offset: '0',
        name: 'Carina',
        image: 'carina',
        text: 'Carina hatte es geschafft innerhalb von zwei Wochen nach Abschluss des Programms ihren ersten Job als Softwareentwicklerin zu bekommen. Sie entwickelt nun Frontend & Backend für Webanwendungen im IoT-Bereich für ein Münchner Unternehmen, das dank der tollen Leistungen von Carina nun Partnerunternehmen der Developer Akademie ist. (Foto zeigt nicht Carina)'
      },
      {
        offset: '0',
        name: 'Eric',
        image: 'eric',
        text: 'In einer Softwareagentur in Wien ist Eric Teil eines Teams, dass für große Kunden spannende Software entwickelt. U.a. arbeitet er an Projekten, die helfen Infrastruktur mit Software abzubilden und zu steuern.'
      },
 */
