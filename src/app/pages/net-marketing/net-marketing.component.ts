import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-net-marketing',
  templateUrl: './net-marketing.component.html',
  styleUrls: ['./net-marketing.component.scss']
})
export class NetMarketingComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (document.getElementsByClassName('tiny-five-item').length > 0) {
      var slider = tns({
        container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
          1025: {
            items: 5
          },

          992: {
            items: 4
          },

          767: {
            items: 3
          },

          425: {
            items: 1
          },
        },
      });
    }
  }
}