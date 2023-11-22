import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  alumno ={
    id:0,
    Eusername: '',
    Epassword: '',
    Ecorreo: '',
    Erole:'',
    isactive: false
  }

  constructor(private authService: AuthService,
              private router: Router,) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAlumnoById(this.getAlumnoIdFromUrl());
  }

  getAlumnoIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getAlumnoById(alumnoID:number){
    this.authService.BuscarAlumnoId(alumnoID).subscribe(
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

}
