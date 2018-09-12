import { firebase_auth } from './config/app-constant';
import { FirebaseHelperService } from './services/firebase-helper.service';
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

import * as firebase from 'firebase';
import { LoginComponent } from './login/login.component';

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
    LoginComponent,

  ],
  providers: [FirebaseHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
