import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilactualizar-alumno',
  templateUrl: './perfilactualizar-alumno.page.html',
  styleUrls: ['./perfilactualizar-alumno.page.scss'],
})
export class PerfilactualizarAlumnoPage implements OnInit {

  alumno={
    id: 0,
    Eusername:"",
    Epassword:"",
    Ecorreo:"",
    Erole:"",
    isactive: false
  }

  constructor(private authservice: AuthService,
              private router: Router, 
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getEstudianteById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getEstudianteById(alumnoID:number){
    this.authservice.BuscarAlumnoId(alumnoID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.alumno={
          id: resp[0].id,
          Eusername: resp[0].username,
          Epassword: resp[0].password,
          Ecorreo:  resp[0].correo,
          Erole: resp[0].role,
          isactive: resp[0].isactive
        }
      }
    )
  }

  ActualizarAlumno(){
    this.authservice.ActualizarAlumno(this.alumno).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/inicio-estudiante");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Alumno Actualizado ',
      message: 'Su información se ha modificado ' + this.alumno.Eusername,
      buttons: ['OK']
    });
    alerta.present();
  }

}
