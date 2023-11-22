import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilactualizar-docente',
  templateUrl: './perfilactualizar-docente.page.html',
  styleUrls: ['./perfilactualizar-docente.page.scss'],
})
export class PerfilactualizarDocentePage implements OnInit {

  docente ={
    id:0,
    Pusername:'',
    Ppassword:'',
    Pcorreo:'',
    nombre_asignatura:'',
    ano_asignatura:'',
    semestre_asignatura:'',
    horas_asignatura:'',
    role:'',
    isactive: false

  }

  constructor(private authservice: AuthService,
              private router: Router, 
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getDocenteById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getDocenteById(docenteID:number){
    this.authservice.BuscarDocenteId(docenteID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.docente={
          id: resp[0].id,
          Pusername: resp[0].username,
          Ppassword: resp[0].password,
          Pcorreo:  resp[0].correo,
          nombre_asignatura: resp[0].nombre_asignatura,
          ano_asignatura: resp[0].ano_asignatura,
          semestre_asignatura: resp[0].semestre_asignatura,
          horas_asignatura:   resp[0].horas_asignatura,
          role: resp[0].role,
          isactive: resp[0].isactive
        }
      }
    )
  }

  ActualizarDocente(){
    this.authservice.ActualizarDocente(this.docente).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/inicio");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.docente.Pusername,
      buttons: ['OK']
    });
    alerta.present();
  }

}
