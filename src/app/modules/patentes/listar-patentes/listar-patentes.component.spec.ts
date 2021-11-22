import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPatentesComponent } from './listar-patentes.component';

describe('ListarPatentesComponent', () => {
  let component: ListarPatentesComponent;
  let fixture: ComponentFixture<ListarPatentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPatentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPatentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
