import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMKEvalComponent } from './view-mkeval.component';

describe('ViewMKEvalComponent', () => {
  let component: ViewMKEvalComponent;
  let fixture: ComponentFixture<ViewMKEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMKEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMKEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
