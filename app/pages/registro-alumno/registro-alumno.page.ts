import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Estudiante } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  registroForm: FormGroup;

  userdata: any;

  alumno: Estudiante={
    Eusername: '',
    Epassword: '',
    Ecorreo: '',
    Erole:'',
    isactive: false
  }

  constructor(private alertController: AlertController,
              private authservice: AuthService,
              private router: Router,
              private fbuilder: FormBuilder) {
                this.registroForm = this.fbuilder.group({
                  'Ausername' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'Apassword' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'Acorreo'   : new FormControl("", [Validators.required, Validators.minLength(5)]),
                  'Arol'      : new FormControl("", [Validators.required])
                })
               }

  ngOnInit() {
  }

  registrarAlumno(){
    if(this.registroForm.valid){
      this.authservice.BuscarAlumnoId(this.registroForm.value.Eusername).subscribe(resp=>{
        this.userdata =resp;
        if(this.userdata.length>0){
          this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.alumno.Eusername = this.registroForm.value.Ausername;
          this.alumno.Epassword = this.registroForm.value.Apassword;
          this.alumno.Ecorreo   = this.registroForm.value.Acorreo;
          this.alumno.isactive=true;
          this.alumno.Erole = this.registroForm.value.Arol;
          this.authservice.CrearAlumno(this.alumno).subscribe();
          this.mensaje();
          this.registroForm.reset();
          this.router.navigateByUrl('/login-alumno')
        }
      })
    }
  }

  async mensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias por registrarse !!',
      message: 'Se ha registrado con exito '  + this.alumno.Eusername,
      buttons: ['OK'],
    });
    alert.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usted '+ this.alumno.Eusername + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }



}