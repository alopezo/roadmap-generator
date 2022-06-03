import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor-single-dialog',
  templateUrl: './editor-single-dialog.component.html',
  styleUrls: ['./editor-single-dialog.component.css']
})
export class EditorSingleDialogComponent implements OnInit {

  public Editor = ClassicEditor;
  text: string = '';

  constructor( public dialogRef: MatDialogRef<EditorSingleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
