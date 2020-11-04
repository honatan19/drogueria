import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createClientForm: any;

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public firestoreService: FirestoreService, formBuilder: FormBuilder, public router: Router) {
    this.createClientForm = formBuilder.group({
      nameClient: ['', Validators.required],
      lastNameClient: ['', Validators.required],
      docNumberClient: ['', Validators.required],
      phoneClient: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async createClient() {
    const loading = await this.loadingCtrl.create();
    const nameClient = this.createClientForm.value.nameClient;
    const lastNameClient = this.createClientForm.value.lastNameClient;
    const docNumberClient = this.createClientForm.value.docNumberClient;
    const phoneClient = this.createClientForm.value.phoneClient;

    this.firestoreService.createClient(nameClient, lastNameClient, docNumberClient, phoneClient).then(
      () =>{
        loading.dismiss().then(() =>{
          this.router.navigateByUrl('');
        });
      },
      error =>{
        console.error(error);
      });
      return await loading.present();
  }

}
