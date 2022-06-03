import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSingleDialogComponent } from './editor-single-dialog.component';

describe('EditorSingleDialogComponent', () => {
  let component: EditorSingleDialogComponent;
  let fixture: ComponentFixture<EditorSingleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorSingleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSingleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
