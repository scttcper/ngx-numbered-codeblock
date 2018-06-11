import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberedCodeblockModule } from '../lib/public_api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NumberedCodeblockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
