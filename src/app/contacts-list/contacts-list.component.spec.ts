import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from '../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { ContactsService } from '../contacts.service';
import { FilterPipe } from './filter.pipe';


describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  let service: ContactsService,
  mockHttp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FilterPipe, 
        routedComponents ],
      imports: [ AppRoutingModule, HttpModule ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, ContactsService]
    })
    .compileComponents();

    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    service = new ContactsService(mockHttp);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
