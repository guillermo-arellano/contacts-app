import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../contacts-list/model';
import { ContactsService } from '../contacts-list/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  
  private id: any;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
     if (!this.contact) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.contactsService.getContact(id));
    }
  }

}
