import { Component, OnInit } from '@angular/core';
import { Dato } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public mensaje: string;
  nombre: any;
  dias: any;
  horas: any;
  
  fecha={
    dia:''
  }

  data={
    texto:''
  }

  newDato: Dato={
    Asignatura:'',
    Pusername:'',
    fecha:'',
    hora:''
  }

  constructor(private api: ApiCrudService, 
              private alertcontroller: AlertController) {
    this.mensaje = 'Ha quedado presente'; 
}

  ngOnInit() {
    this.nombre = sessionStorage.getItem('Pusername'); 
    this.horas  = sessionStorage.getItem('horas_asignatura');
  }

  generarQr(){
    this.mensaje = this.data.texto;
    this.newDato.Pusername=this.nombre;
    this.newDato.Asignatura=this.mensaje;
    this.newDato.hora=this.horas
    this.dias = this.fecha.dia;
    this.api.CrearDato(this.newDato).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
    this.fecha.dia='';
  }

  async mostrarMensaje(){
    const alerta= await this.alertcontroller.create({ 
      header:'Dato Creado',
      message: 'Su Qr ha sido almacenado',
      buttons: ['Ok']
    });
    alerta.present();
  }

}
