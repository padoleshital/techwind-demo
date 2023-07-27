import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.scss']
})
export class RestaurentComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    if (document.getElementsByClassName('tiny-twelve-item').length > 0) {
      var slider = tns({
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
          1025: {
            items: 12
          },
          992: {
            items: 8
          },
          767: {
            items: 6
          },
          320: {
            items: 2
          }
        }
      });
    }
  }
}
