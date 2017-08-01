import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ContactsService } from './contacts.service';
import { Contact } from './model';

describe('ContactsService', () => {
  let service: ContactsService,
  mockHttp;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsService]
    });

    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    service = new ContactsService(mockHttp);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
