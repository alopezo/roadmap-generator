import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'steps-dates-dialog',
    templateUrl: 'setps-dates-dialog.html',
    styleUrls: ['setps-dates-dialog.css']
  })
  export class StepsDatesDialog {
    constructor(
      public dialogRef: MatDialogRef<StepsDatesDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }