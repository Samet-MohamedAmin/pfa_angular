/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainingRequestStudentComponent } from './training-request-student.component';

describe('TrainingRequestStudentComponent', () => {
  let component: TrainingRequestStudentComponent;
  let fixture: ComponentFixture<TrainingRequestStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingRequestStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingRequestStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
