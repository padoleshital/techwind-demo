import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent  implements AfterViewInit {

 ngAfterViewInit() {
    if (document.getElementsByClassName('tiny-six-item').length > 0) {
      var slider = tns({
        container: '.tiny-six-item',
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
            items: 6
          },

          992: {
            items: 4
          },

          767: {
            items: 3
          },

          320: {
            items: 1
          },
        },
      });
    }
  }
}
