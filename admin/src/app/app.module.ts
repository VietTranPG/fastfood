import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import firebase from 'firebase'
var firebase_auth = {
  apiKey: "AIzaSyC5j9t6i0XCxdx6I5W8Id4MxfLxhwwsXEs",
  authDomain: "foodapp-90bf3.firebaseapp.com",
  databaseURL: "https://foodapp-90bf3.firebaseio.com",
  projectId: "foodapp-90bf3",
  storageBucket: "foodapp-90bf3.appspot.com",
  messagingSenderId: "814651090405"
}
firebase.initializeApp(firebase_auth);
firebase.firestore().settings({
  timestampsInSnapshots: true
})
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
