import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

    creatDoc(){
      this.firestore.collection('Menus')

    }

    getCollection(){

      console.log('estoy por leer un menú');
      
      this.firestore.collection('Menus').valueChanges().subscribe( (res) =>
      {
        console.log('ALMUERZOS --->',res);
        

      });

    }
  
}
