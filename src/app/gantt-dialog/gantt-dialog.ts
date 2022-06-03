import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'gantt-dialog',
    templateUrl: 'gantt-dialog.html',
  })
  export class GanttDialog {
    constructor(
      public dialogRef: MatDialogRef<GanttDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }