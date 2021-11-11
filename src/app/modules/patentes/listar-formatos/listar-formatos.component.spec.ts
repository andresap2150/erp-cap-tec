import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormatosComponent } from './listar-formatos.component';

describe('ListarFormatosComponent', () => {
  let component: ListarFormatosComponent;
  let fixture: ComponentFixture<ListarFormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFormatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
