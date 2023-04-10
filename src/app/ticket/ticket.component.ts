import { Component, OnInit } from '@angular/core';
import { NgxPrintElementService } from 'ngx-print-element';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  title = 'My Store';
  description = 'Thank you for your purchase!';
  items = [
    { name: 'Product A', quantity: 2, price: '$10.00' },
    { name: 'Product B', quantity: 1, price: '$15.00' },
    { name: 'Product C', quantity: 3, price: '$5.00' },
  ];
  total = '$40.00';

  constructor() { }


  qrCodeData = 'http://www.vinotecamelies.com.ar';
  
  ngOnInit(): void {
  }

  print(): void {
    window.print();
  }

}