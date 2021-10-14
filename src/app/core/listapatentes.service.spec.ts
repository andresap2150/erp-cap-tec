import { TestBed } from '@angular/core/testing';

import { ListapatentesService } from './listapatentes.service';

describe('ListapatentesService', () => {
  let service: ListapatentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListapatentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
