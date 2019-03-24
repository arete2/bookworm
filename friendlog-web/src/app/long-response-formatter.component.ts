import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { LineToLineMappedSource } from 'webpack-sources';

@Component({
  selector: 'app-long-response-formatter',
  templateUrl: './long-response-formatter.component.html',
  styleUrls: ['./long-response-formatter.component.scss']
})
export class LongResponseFormatterComponent implements OnInit {

  @Input() text;

  paragraphs: string[][];

  constructor() { }

  ngOnInit() {
    this.paragraphs = this.text.split('\n\n').map(para => para.split('\n'));
  }
}
