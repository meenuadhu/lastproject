import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsedetailsComponent } from './corsedetails.component';

describe('CorsedetailsComponent', () => {
  let component: CorsedetailsComponent;
  let fixture: ComponentFixture<CorsedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
