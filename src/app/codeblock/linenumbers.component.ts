import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'codeblock-linenumbers',
  template: `<span aria-hidden="true" class="line-numbers-rows"><span *ngFor="let l of linesArr"></span></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
  .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: 0;
    width: 2em; /* works for line-numbers below 1000 lines */
    user-select: none;
  }
  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }
  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #ced3d7;
    display: block;
    padding-right: 0.7em;
    text-align: right;
  }
  `],
})
export class CodeblockLineNumberComponent implements OnChanges {
  @Input() lines: number;
  linesArr: any[] = [];

  ngOnChanges() {
    this.linesArr = new Array(this.lines + 1).fill(1);
  }
}
