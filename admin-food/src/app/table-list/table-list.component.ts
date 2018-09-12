import { FirebaseHelperService } from './../services/firebase-helper.service';
import { Component, OnInit } from '@angular/core';
import { firebase_db_name } from '../config/app-constant';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private _firebaseHelper : FirebaseHelperService) { }

  ngOnInit() {
    this._firebaseHelper.getAll(firebase_db_name.products).then(data=>{
      console.log(data)
    })
  }

}
