import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user={
    correo:'',
    nombre:'',
    apellido:'',
    password:'',
    jornada:''
  }


  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Mensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias!!',
      message: 'Se ha registrado con exito',
      buttons: ['OK'],
    });
    await alert.present();
  }

  enviar(){
    this.Mensaje();
    this.user.correo='';
    this.user.nombre='';
    this.user.apellido='';
    this.user.password='';
    this.user.jornada='';
  }



}
