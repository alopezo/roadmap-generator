import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppSnackComponent, StepsDatesDialog, TimelineDialog, GanttDialog } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { MzdTimelineModule } from 'ngx-mzd-timeline';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGanttModule, GANTT_GLOBAL_CONFIG } from '@worktile/gantt';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { EditorSingleComponent } from './editor-single/editor-single.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSnackComponent,
    StepsDatesDialog,
    TimelineDialog,
    GanttDialog,
    GanttChartComponent,
    EditorSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MzdTimelineModule,
    FontAwesomeModule,
    NgxGanttModule
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: {
        dateFormat: {
             yearQuarter: `QQQ 'of' yyyy`,
             month: 'LLLL',
             yearMonth: `LLLL yyyy'(week' w ')'`
        }
      }
    }
  ],
  entryComponents: [StepsDatesDialog, TimelineDialog, GanttDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
