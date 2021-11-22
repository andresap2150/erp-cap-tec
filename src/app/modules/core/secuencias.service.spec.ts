import { TestBed } from '@angular/core/testing';

import { SecuenciasService } from './secuencias.service';

describe('SecuenciasService', () => {
  let service: SecuenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
