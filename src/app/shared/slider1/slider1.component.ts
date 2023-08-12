import { AfterViewInit, Component, OnInit } from '@angular/core';
import{ tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss']
})
export class Slider1Component implements AfterViewInit {
  slider: any;

  testimonials = [
    {
      quote: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
      name: "Calvin Carlo",
      role: "Manager",
      image:'assets/images/client/01.jpg'
    },
    {
      quote: " The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. ",
      name: "Christa Smith",
      role: "Manager",
      image:'assets/images/client/02.jpg'
    },
    {
      quote: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
      name: "Jemina CLone",
      role: "Manager",
      image:'assets/images/client/03.jpg'
    },
    {
      quote: " Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. ",
      name: "Smith Vodka",
      role: "Manager",
      image:'assets/images/client/04.jpg'
    },
    {
      quote: " There is now an abundance of readable dummy texts. These are usually used when a text is required. ",
      name: "Cristino Murfi",
      role: "Manager",
      image:'assets/images/client/05.jpg'
    },
    {
      quote: " According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. ",
      name: "Cristino Murfi",
      role: "Manager",
      image:'assets/images/client/06.jpg'
    },
  ]

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
