import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSyllabusComponent } from './course-syllabus.component';

describe('CourseSyllabusComponent', () => {
  let component: CourseSyllabusComponent;
  let fixture: ComponentFixture<CourseSyllabusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSyllabusComponent]
    });
    fixture = TestBed.createComponent(CourseSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
