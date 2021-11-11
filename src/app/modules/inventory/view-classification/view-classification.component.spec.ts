import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassificationComponent } from './view-classification.component';

describe('ViewClassificationComponent', () => {
  let component: ViewClassificationComponent;
  let fixture: ComponentFixture<ViewClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
