import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { faFlagCheckered, faCheck, faClipboardList, faNetworkWired, faGraduationCap, faUsers, faList, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'timeline-dialog',
    templateUrl: 'timeline-dialog.html',
  })
  export class TimelineDialog {
    faFlagCheckered = faFlagCheckered;
    faCheck = faCheck;
    faClipboardList = faClipboardList;
    faNetworkWired = faNetworkWired;
    faGraduationCap = faGraduationCap;
    faUsers = faUsers;
    faList = faList;
    faEdit = faEdit;
    constructor(
      public dialogRef: MatDialogRef<TimelineDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }