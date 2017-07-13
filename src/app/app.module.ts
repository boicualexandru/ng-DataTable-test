import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoicesService } from "app/services/invoices.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { DataTableModule, SharedModule, DialogModule, InputTextModule, ButtonModule, ContextMenuModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ContextMenuModule
  ],
  providers: [InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
