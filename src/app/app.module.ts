import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { CodeblockLineNumberComponent } from './codeblock/linenumbers.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeblockComponent,
    CodeblockLineNumberComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
