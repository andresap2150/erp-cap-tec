import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPatenteComponent } from './crear-patente.component';

describe('CrearPatenteComponent', () => {
  let component: CrearPatenteComponent;
  let fixture: ComponentFixture<CrearPatenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPatenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPatenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
