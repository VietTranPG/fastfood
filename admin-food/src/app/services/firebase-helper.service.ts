import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FirebaseHelperService {

  constructor() { }
  getAll(collection) {
    console.log(collection)
    return new Promise((resolve, reject) => {
      firebase.firestore().collection(collection).get().then(querySnapshot => {
        let resolveData = [];
        querySnapshot.forEach((doc) => {
          resolveData.push(doc.data());
        });
        resolve(resolveData);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
