import { TestBed } from '@angular/core/testing';

import { ListaPatentesService } from './lista-patentes.service';

describe('ListaPatentesService', () => {
  let service: ListaPatentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPatentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
