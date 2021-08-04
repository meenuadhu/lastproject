import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationalcourseComponent } from './cooperationalcourse.component';

describe('CooperationalcourseComponent', () => {
  let component: CooperationalcourseComponent;
  let fixture: ComponentFixture<CooperationalcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperationalcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperationalcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
