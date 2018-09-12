import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email:any;
  password:any;
  ngOnInit() {
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        console.log(data)
      }).catch(err => {
        
      })
  }

}
