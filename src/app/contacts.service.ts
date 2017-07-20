import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CONFIG } from './config';
import { Contact } from './model';

let contactsUrl = CONFIG.baseUrls.contacts;

@Injectable()
export class ContactsService {
  contacts: Observable<Contact[]>;
  private _contacts: BehaviorSubject<Contact[]>;
  private dataStore: {
    contacts: Contact[];
  }

  constructor(private http: Http) { 
    this.dataStore = { contacts: [] };
    this._contacts = <BehaviorSubject<Contact[]>>new BehaviorSubject([]);
    this.contacts = this._contacts.asObservable();
  }

  getContact(id: number) {  
    return this.dataStore.contacts.find(contact => +contact.id == id);
  }

  getContacts() {
    if (this.dataStore.contacts.length !== 0) {
      return this._contacts.next(Object.assign({}, this.dataStore).contacts);
    } else {
      return this.http
        .get(contactsUrl)
        .map((response: Response) => <Contact[]>response.json())
        .subscribe( data => {
            this.dataStore.contacts = data;
            this._contacts.next(Object.assign({}, this.dataStore).contacts);
          },
          error => console.log("Could not load all Contacts"));
    }
  }
}