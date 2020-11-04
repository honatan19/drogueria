import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Client } from  '../../interfaces/client.interface'; 

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createClient(nameClient:string, lastNameClient:string, docNumberClient:string, phoneClient:string): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.doc(`client/${id}`).set({id, nameClient,lastNameClient,docNumberClient,phoneClient,});
  }

  getClientList(): AngularFirestoreCollection<Client>{
    return this.firestore.collection(`client`);
  }

}
