import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from '../contacts.service';
import { Contact } from '../model';

@Component({
  moduleId: module.id,
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Contact[]>;
  selectedContact: Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService
      .getContacts()
      .map(items => items.sort(this.compareFn));
  }

  select(contact: Contact) {
    this.selectedContact = contact;
  }
  compareFn = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  };
}
