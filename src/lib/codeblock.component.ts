/* tslint:disable:max-line-length */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

declare var require: any;

@Component({
  selector: 'ngx-numbered-codeblock',
  template: `
  <pre class="codeblock" [class.line-numbers]="lineNumbers"><code><codeblock-linenumbers *ngIf="lineNumbers" [lines]="lines"></codeblock-linenumbers><span [innerHTML]="html"></span></code></pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      pre {
        overflow-x: scroll;
        overflow-y: hidden;
        padding-left: 0;
      }
      pre.line-numbers {
        counter-reset: linenumber;
      }
      pre.line-numbers > code {
        position: relative;
      }
      .codeblock code {
        display: block;
      }
      .codeblock.line-numbers code {
        padding: 0 0 1em 2.5em;
      }
    `,
  ],
})
export class CodeblockComponent implements OnChanges {
  @Input() lineNumbers = true;
  @Input() code = '';
  @Input() languague = 'typescript';
  html = '';
  lines: number;

  ngOnChanges() {
    const match = this.code.match(/\n(?!$)/g);
    this.lines = match ? match.length + 1 : 1;
    const { highlight, languages } = require('prismjs');
    this.html = highlight(this.code, languages[this.languague]);
  }
}
