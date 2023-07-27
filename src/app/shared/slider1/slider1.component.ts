import { AfterViewInit, Component, OnInit } from '@angular/core';
import{ tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss']
})
export class Slider1Component implements AfterViewInit {
  slider: any;
  ngAfterViewInit() {
    const sliderContainer = document.querySelector('.tiny-three-item');
    if (sliderContainer) {
      this.slider = tns({
        container: sliderContainer,
        controls: false,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
          992: {
            items: 3
          },
          767: {
            items: 2
          },
          320: {
            items: 1
          },
        },
      });
    }
  }
}
