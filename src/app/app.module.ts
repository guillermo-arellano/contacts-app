import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ContactsService } from './contacts.service';
import { FilterPipe } from './contacts-list/filter.pipe';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    FilterPipe,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
