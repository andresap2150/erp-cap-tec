import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPatentesComponent } from './lista-patentes.component';

describe('ListaPatentesComponent', () => {
  let component: ListaPatentesComponent;
  let fixture: ComponentFixture<ListaPatentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPatentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPatentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
