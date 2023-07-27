import { AfterViewInit, Component } from '@angular/core';
import{ tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements AfterViewInit {
  ngAfterViewInit() {
    if(document.getElementsByClassName('tiny-single-item').length > 0) {
      var slider = tns({
          container: '.tiny-single-item',
          items: 1,
          controls: false,
          mouseDrag: true,
          loop: true,
          rewind: true,
          autoplay: true,
          autoplayButtonOutput: false,
          autoplayTimeout: 3000,
          navPosition: "bottom",
          speed: 400,
          gutter: 16,
      });
  };
    
  }

}
