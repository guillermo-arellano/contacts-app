import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  src: string = "/assets/img/profiles/User-Icon-Large@2x.png";
  
  private id: any;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (!this.contact){
      this.route
          .params
          .map(params => params['id'])
          .do(id => this.id = +id)
          .subscribe(id => this.getContact());
      }
    }

  private getContact(){
    this.contactsService.getContact(this.id)
      .subscribe(contact => this.setDisplayContact(contact));
  }

  private gotoContacts() {
    let route = ['/contacts-list'];
    this.router.navigate(route);
  }

  private setDisplayContact(contact: Contact) {
    if (contact) {
      this.contact = contact;
    } else {
      this.gotoContacts();
    }
  }

}
