import { Component } from '@angular/core';

@Component({
  selector: 'app-confortable-rates',
  templateUrl: './confortable-rates.component.html',
  styleUrls: ['./confortable-rates.component.scss']
})
export class ConfortableRatesComponent {
  features = [
    { icon: 'uil uil-check-circle text-indigo-600 text-xl', text: 'Full Access' },
    { icon: 'uil uil-check-circle text-indigo-600 text-xl', text: 'Source Files' },
    { icon: 'uil uil-check-circle text-indigo-600 text-xl', text: 'Free Appointments' },
    { icon: 'uil uil-check-circle text-indigo-600 text-xl', text: 'Enhanced Security' }
  ];

}
