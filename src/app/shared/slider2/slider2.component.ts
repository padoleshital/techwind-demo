import { AfterViewInit, Component } from '@angular/core';
import{ tns } from 'tiny-slider/src/tiny-slider';
@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss']
})
export class Slider2Component implements AfterViewInit {
  ngAfterViewInit(): void {
    const slider = tns({
      container: '.tiny-two-item',
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: 'bottom',
      controlsText: [
        '<i class="mdi mdi-chevron-left "></i>',
        '<i class="mdi mdi-chevron-right"></i>',
      ],
      nav: false,
      speed: 400,
      gutter: 0,
      responsive: {
        768: {
          items: 2,
        },
      },
    });
  }
}

