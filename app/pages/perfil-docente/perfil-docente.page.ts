import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage implements OnInit {

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

  constructor(private authService: AuthService,
              private router: Router,) { }

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
    this.authService.BuscarDocenteId(docenteID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.docente={
          id: resp[0].id,
          Pusername: resp[0].Pusername,
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

}
