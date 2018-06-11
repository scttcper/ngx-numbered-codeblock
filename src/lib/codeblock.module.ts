import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeblockComponent } from './codeblock.component';
import { CodeblockLineNumberComponent } from './linenumbers.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CodeblockComponent, CodeblockLineNumberComponent],
  exports: [CodeblockComponent, CodeblockLineNumberComponent],
})
export class NumberedCodeblockModule {}
