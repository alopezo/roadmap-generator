import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {faFlagCheckered, faCheck, faClipboardList, faNetworkWired, faGraduationCap, faUsers, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import {backgrounds} from './roadmap-content/background';
import {visionIntro, visions} from  './roadmap-content/vision';
import {currentStates} from './roadmap-content/current-states';
import {goalsIntro, goals} from './roadmap-content/goals';
import {clinicalFocusIntro, clinicalFocus} from './roadmap-content/clinical-focus';
import {steps, stepsIntro} from './roadmap-content/steps';
import {projects} from './roadmap-content/projects';
import {closings} from './roadmap-content/closing';
import { GanttItem } from '@worktile/gantt';

declare var anime: any;  

interface sourceData {
  opSelector: string;
  text: string;
}

interface milestone {
  name: string;
  text: string;
  date: string;
}

interface stepData extends sourceData {
  dateStart?: Date;
  dateEnd?: Date;
  milestones?: milestone[];
} 

interface dataGrouper {
  group: string;
  options: stepData[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'roadmap-generator';
  country= 'Country Name';

  backgrounds!: sourceData[];
  visionIntro = '';
  visions!: sourceData[];
  selectedVisions = [];
  currentStates!: sourceData[];
  goalsIntro = '';
  goals!: sourceData[];
  selectedGoals = [];
  clinicalFocusIntro = '';
  clinicalFocus!: sourceData[];
  selectedClinicalFocus = [];
  stepsIntro = '';
  steps!: dataGrouper[];
  selectedSteps:any[] = [];
  projects!: sourceData[];
  closings!: sourceData[];

  roadmap: string = '';
  roadmapStart: Date = new Date('2022-01-01');
  roadmapEnd: Date = new Date('2022-12-31');

  constructor(readonly snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.roadmap = `
      <h1><span class='country'></span>: SNOMED CT Implementation Roadmap</h1>
      <div class="Background"></div>
      <div class="Vision"></div>
      <div class="Current-state"></div>
      <div class="Goals"></div>
      <div class="Clinical-focus"></div>
      <div class="Steps"></div>
      <div class="Priorities"></div>
      <div class="Implementation-projects"></div>
      <div class="Closing-remarks"></div>
      `;
    this.backgrounds = backgrounds;
    this.visionIntro = visionIntro;
    this.visions = visions;
    this.currentStates = currentStates;
    this.goalsIntro = goalsIntro;
    this.goals = goals;
    this.clinicalFocusIntro = clinicalFocusIntro;
    this.clinicalFocus = clinicalFocus;
    this.stepsIntro = stepsIntro;
    this.steps = steps;
    this.projects = projects;
    this.closings = closings;
    this.nameChanged()
  }

  changeVision() {
    setTimeout(() => {
      if (this.selectedVisions.length > 0) {
        let visionsText = `<p>${this.visionIntro}</p><br>`;
        this.selectedVisions.forEach((vision: any) => {
          visionsText = visionsText + `${vision.text}<br>`;
        })
        this.replaceSection('Vision', `<h2>Vision</h2>${visionsText}<br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Vision', '');
      }
    }, 100);
  }

  changeGoals() {
    setTimeout(() => {
      if (this.selectedGoals.length > 0) {
        let goalsText = `<p>${this.goalsIntro}</p><ul>`;
        this.selectedGoals.forEach((goal: any) => {
          goalsText = goalsText + `<li>${goal.text}</li>`;
        })
        this.replaceSection('Goals', `<h2>Goals</h2>${goalsText}</ul><br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Goals', '');
      }
    }, 100);
  }

  changeClinicalFocus() {
    setTimeout(() => {
      if (this.selectedClinicalFocus.length > 0) {
        let focusText = `<p>${this.clinicalFocusIntro}</p><ul>`;
        this.selectedClinicalFocus.forEach((focus: any) => {
          focusText = focusText + `<li>${focus.opSelector}: ${focus.text}</li>`;
        })
        this.replaceSection('Clinical-Focus', `<h2>Clinical focus</h2>${focusText}</ul><br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Clinical-Focus', '');
      }
    }, 100);
  }

  changeSteps() {
    setTimeout(() => {
      if (this.selectedSteps.length > 0) {
        let groups = this.selectedSteps.map( ({group}) => (group))
        let groupsu =  [...new Set(groups)];
        let stepsText = `<p>${this.stepsIntro}</p><ul>`;
        groupsu.forEach( (group:any) => {
          stepsText = stepsText + `<li>${group}<ul>`;
          this.selectedSteps.forEach((step: any) => {
            if (step.group == group) {
              stepsText = stepsText + `<li>${step.step.opSelector}: ${step.step.text}</li>`;
            }
          })
          stepsText = stepsText + `</ul></li>`;
        });
        this.replaceSection('Clinical-Focus', `<h2>Clinical focus</h2>${stepsText}</ul><br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Clinical-Focus', '');
      }
    }, 100);
  }

  change(section: string, event: any) {
    if(event.isUserInput) {
      if (event.source.value == 'Not applicable') {
        this.replaceSection(section, '');
      } else {
        this.replaceSection(section, `<h2>${section.replace('-',' ')}</h2><p>${event.source.value}</p>`);
        this.nameChanged()
      }
    }
  }

  nameChanged() {
    this.replaceSection('country', this.country);
  }

  replaceSection(section: string, newValue: string) {
    const parser = new DOMParser();
    let parsedRoadmap = parser.parseFromString(this.roadmap, "text/html");
    let sectionNodes = parsedRoadmap.querySelectorAll(`.${section}`);
    sectionNodes.forEach(function(sectionNode) {
      sectionNode?.replaceChildren(newValue)
    });
    let body = parsedRoadmap.querySelector(`body`)?.innerHTML;
    body = body?.split('&lt;').join('<');
    body = body?.split('&gt;').join('>');
    if (body) {
      this.roadmap = body;
    }
    this.animate(section)
  }

  htmlDecode(input: string) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  animate(section: string) {
    setTimeout(() => {
      var elements = document.querySelectorAll(`.${section}`);
      anime({
        targets: elements,
        backgroundColor: ['#f0fc03','#fff'],
        duration: 8000
      });
    }, 100)
  }

  saveToWord() {
    this.snackBar.openFromComponent(AppSnackComponent, {
      duration: 3000,
    });
    // const htmlString = `<html><body>${this.roadmap}</body></html>`;
    // const fileBuffer = await htmlToDocx(htmlString, null, {
    //   table: { row: { cantSplit: true } },
    //   footer: true,
    //   pageNumber: true,
    // });
  
    // saveAs(fileBuffer, 'html-to-docx.docx');
  }

  openStepsDialog(): void {
    const dialogRef = this.dialog.open(StepsDatesDialog, {
      width: '80%',
      height: '90%',
      data: {selectedSteps: this.selectedSteps, roadmapStart: this.roadmapStart, roadmapEnd: this.roadmapEnd},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedSteps = result.selectedSteps;
      this.roadmapStart = result.roadmapStart;
      this.roadmapEnd = result.roadmapEnd;
    });
  }

  openTimelineDialog(): void {
    const sortedSteps = this.selectedSteps.sort(function(a,b){
      var key1 = new Date(a.dateEnd);
      var key2 = new Date(b.dateEnd);
      if (key1 < key2) {
          return -1;
      } else if (key1 == key2) {
          return 0;
      } else {
          return 1;
      }
    });
    const dialogRef = this.dialog.open(TimelineDialog, {
      width: '60%',
      height: '90%',
      data: {
        country: this.country,
        selectedSteps: this.selectedSteps, 
        roadmapStart: this.roadmapStart, 
        roadmapEnd: this.roadmapEnd
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openGanttDialog(): void {
    const items: GanttItem[] = [
      { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197 },
      { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597 }
    ];

    let stepsList: GanttItem[] = [];
    this.selectedSteps.forEach( step => {
      let loopItem = { id: step.step.opSelector, title: step.step.opSelector, start: this.dateToTimestamp(step.dateStart), end: this.dateToTimestamp(step.dateEnd) }
      stepsList.push(loopItem);
    });

    const dialogRef = this.dialog.open(GanttDialog, {
      width: '100%',
      height: '90%',
      data: {
        country: this.country,
        selectedSteps: this.selectedSteps, 
        roadmapStart: this.dateToTimestamp(this.roadmapStart), 
        roadmapEnd: this.dateToTimestamp(this.roadmapEnd),
        items: stepsList
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  dateToTimestamp(date: Date) {
    return (Math.floor(date.getTime() / 1000));
  }

}

@Component({
  selector: 'app-root-snack',
  templateUrl: 'app-root-snack.html',
  styles: [],
})
export class AppSnackComponent {}

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