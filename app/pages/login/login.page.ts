import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    email:'',
    password:''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Mensaje(){
    const alert = await this.alertController.create({
      header: 'Bienvenido @ !!',
      message: 'Usted se ha logeado con exito',
      buttons: ['OK'],
    });
    await alert.present();
  }

  Enviar(){
    this.Mensaje();
    this.usuario.email='';
    this.usuario.password='';
  }

}
