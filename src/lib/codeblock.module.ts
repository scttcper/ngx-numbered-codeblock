import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeblockComponent } from './codeblock.component';
import { CodeblockLineNumberComponent } from './linenumbers.component';

const c = [CodeblockComponent, CodeblockLineNumberComponent];

@NgModule({
  imports: [CommonModule],
  declarations: c,
  exports: c,
})
export class NumberedCodeblockModule {}
