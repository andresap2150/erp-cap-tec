import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarFormatosComponent } from './cargar-formatos.component';

describe('CargarFormatosComponent', () => {
  let component: CargarFormatosComponent;
  let fixture: ComponentFixture<CargarFormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarFormatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
