import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'contacts-list', },
    { path: 'contacts-list', component: ContactsListComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    AppComponent,
    PageNotFoundComponent
];