import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../model';
import { ContactsService } from '../contacts.service';


interface IPhoneNumbers {
    phoneType: string;
    number: string;
}

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  phoneNumbers: IPhoneNumbers[];
  dateFromString: Date;


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

  private getContact() {
    this.setDisplayContact(this.contactsService.getContact(this.id));
  }

  private gotoContacts() {
    let route = ['/contacts-list'];
    this.router.navigate(route);
  }

  private setDisplayContact(contact: Contact) {
    if (contact) {
      this.contact = contact;
      this.setPhoneNumbers(this.contact.phone);
      this.setDate(this.contact.birthdate);
    } else {
      this.gotoContacts();
    }
  }

  private setPhoneNumbers (phoneObj: any) {
    if (phoneObj) {
      let array = [];
      Object.keys(phoneObj).forEach( key => {
        array.push({
          phoneType: key, 
          number: phoneObj[key]
        });
      });
      this.phoneNumbers = array;
    }
  }

  private setDate(birthdate: string) {
    if (birthdate != null || undefined) {
      birthdate += "T12:00:00";
      this.dateFromString = new Date(birthdate);
    }
  }

  toggleFavorite() {
    this.contact.isFavorite = !this.contact.isFavorite;
  }

}
