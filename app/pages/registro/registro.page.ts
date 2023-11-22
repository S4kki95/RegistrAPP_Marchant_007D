import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Profesor } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  userdata: any;

  docente: Profesor={
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


  constructor(private alertController: AlertController,
              private authservice: AuthService,
              private router: Router,
              private fbuilder: FormBuilder) {
                this.registroForm = this.fbuilder.group({
                  'username' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'correo'   : new FormControl("", [Validators.required, Validators.minLength(5)]),
                  'nombre_asignatura': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'ano_asignatura': new FormControl("", [Validators.required]),
                  'semestre_asignatura': new FormControl("", [Validators.required]),
                  'horas_asignatura': new FormControl("", [Validators.required]),
                  'rol': new FormControl("", [Validators.required])

                })
               }

  ngOnInit() {
  }

  registrarDocente(){
    if (this.registroForm.valid){
      //implementar que el usuario no se repita, en caso que ya existe enviar un mensaje
      this.authservice.BuscarDocenteId(this.registroForm.value.Pusername).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.docente.Pusername = this.registroForm.value.username;
          this.docente.Ppassword = this.registroForm.value.password;
          this.docente.Pcorreo   = this.registroForm.value.correo;
          this.docente.nombre_asignatura = this.registroForm.value.nombre_asignatura;
          this.docente.ano_asignatura = this.registroForm.value.ano_asignatura;
          this.docente.semestre_asignatura = this.registroForm.value.semestre_asignatura;
          this.docente.horas_asignatura = this.registroForm.value.horas_asignatura;
          this.docente.role = this.registroForm.value.rol;
          this.docente.isactive=true;
          this.authservice.CrearDocente(this.docente).subscribe();
          this.registroForm.reset();
          this.mensaje();
          this.router.navigateByUrl('/login');
        }
      })    
    }
  }

  async mensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias por registrarse !!',
      message: 'Se ha registrado con exito ' + this.docente.Pusername,
      buttons: ['OK'],
    });
    alert.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usted '+ this.docente.Pusername + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }
}
