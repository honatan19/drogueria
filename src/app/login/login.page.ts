import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import validator from 'validator';
import {NavController} from '@ionic/angular';
import {  MenuController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {


  loginForm=new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl('')

  });
    loginFormValidator={
      userEmail:{ empty:'', email: ''},
        userPassword: {empty:'' }
    };

  
    
    
    ngOnInit() {
    }

  onSubmit() {
    if(this.formValidator()){
      this.NavCtrl.navigateForward('/home');
      console.log('Formulario Valido');
    }
  }

  constructor(private NavCtrl:NavController, public menu: MenuController) { 
    this.menu.swipeGesture(false)
  
  }
  
  

  formValidator(): boolean{
    if (validator.isEmpty(this.loginForm.value.userEmail)){
      this.loginFormValidator.userEmail.empty = 'La direccion de correo electronico es requerido';
      return false;
    }else{
      this.loginFormValidator.userEmail.empty ='';
    }
    if (!validator.isEmail(this.loginForm.value.userEmail)){
      this.loginFormValidator.userEmail.email = 'La direccion de correo es invalida';
      return false;
    }else{
      this.loginFormValidator.userEmail.email ='';
    }
    if (validator.isEmpty(this.loginForm.value.userPassword)){
      this.loginFormValidator.userPassword.empty = 'La contraseña es requerido';
      return false;
    }else{
      this.loginFormValidator.userPassword.empty ='';
    }
    return true;
  }

}
