import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MckinseyComponent } from './mckinsey.component';

describe('MckinseyComponent', () => {
  let component: MckinseyComponent;
  let fixture: ComponentFixture<MckinseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MckinseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MckinseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
