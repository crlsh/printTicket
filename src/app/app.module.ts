import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    QrCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
