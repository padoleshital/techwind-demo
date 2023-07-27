import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-index-software',
  templateUrl: './index-software.component.html',
  styleUrls: ['./index-software.component.scss']
})
export class IndexSoftwareComponent implements AfterViewInit {
  slider:any
  constructor() { }

  ngAfterViewInit() {
    if(document.getElementsByClassName('tiny-single-item').length > 0) {
      this.slider = tns({
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
