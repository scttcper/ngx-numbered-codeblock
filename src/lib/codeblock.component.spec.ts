import { Component, NgModule, ViewChild } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { NumberedCodeblockModule } from './codeblock.module';
import * as prismjs from 'prismjs';

@Component({
  selector: 'test-component',
  template: `
  <ngx-numbered-codeblock [code]="code" [languague]="languague"></ngx-numbered-codeblock>
  `,
})
export class TestComponent {
  code = 'const swag: number = 1;';
  languague = 'typescript';
}

@NgModule({
  imports: [NumberedCodeblockModule],
  declarations: [TestComponent],
})
export class NameModule {}

describe('ChartjsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NameModule],
    }).compileComponents();
  }));
  it('should call render', async(() => {
    const spy = spyOn(prismjs, 'highlight');
    const fixture = TestBed.createComponent(TestComponent);
    const tc: TestComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(tc).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  }));
  it('should re-render after changes', async(() => {
    const spy = spyOn(prismjs, 'highlight');
    const fixture = TestBed.createComponent(TestComponent);
    const tc: TestComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    tc.code = `var a = 420`;
    tc.languague = 'javascript';
    fixture.detectChanges();
    expect(tc).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(2);
  }));
});
