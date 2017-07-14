import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CONFIG } from '../config';
import { Contact } from './model';

let contactsUrl = CONFIG.baseUrls.contacts;

@Injectable()
export class ContactsService {
  constructor(private http: Http) { }

  getContact(id: number) {
    // TODO
    // return this.getCharacters()
    //   .map(characters => characters.find(character => character.id === id));
  }

  getContacts() {
    return this.http
      .get(contactsUrl)
      .map((response: Response) => <Contact[]>response.json());
  }
}