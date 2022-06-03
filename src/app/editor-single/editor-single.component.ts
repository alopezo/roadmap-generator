import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor-single',
  templateUrl: './editor-single.component.html',
  styleUrls: ['./editor-single.component.css']
})
export class EditorSingleComponent implements OnInit {

  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
