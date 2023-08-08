import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.scss']
})
export class CompanyLogoComponent implements OnInit  {
  clientLogos:any;
  ngOnInit(): void {
    this.clientLogos = [
      'amazon.svg',
      'google.svg',
      'lenovo.svg',
      'paypal.svg',
      'shopify.svg',
      'spotify.svg'
    ];
  }

 
}
