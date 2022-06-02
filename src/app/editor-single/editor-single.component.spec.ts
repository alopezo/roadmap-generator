import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSingleComponent } from './editor-single.component';

describe('EditorSingleComponent', () => {
  let component: EditorSingleComponent;
  let fixture: ComponentFixture<EditorSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
