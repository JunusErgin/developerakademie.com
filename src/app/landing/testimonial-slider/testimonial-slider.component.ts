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
