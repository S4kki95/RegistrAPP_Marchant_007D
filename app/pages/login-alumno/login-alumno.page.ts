import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {


  userdata: any;

  loginForm: FormGroup;

  alumno={
    id: 0,
    Eusername:"",
    Epassword:"",
    Erole:"",
    isactive: false
  }

  constructor(private authservice: AuthService,
    private router: Router,
    private alertcontroller: AlertController,
    private toastcontroller: ToastController,
    private fbuilder: FormBuilder) { 
      this.loginForm = this.fbuilder.group({
        'Eusername' : new FormControl("", [Validators.required, Validators.minLength(4)]),
        'Epassword' : new FormControl("", [Validators.required, Validators.minLength(4)]) 
      })
     }

  ngOnInit() {
  }

  loginA(){
    if (this.loginForm.valid){
      this.authservice.GetEstudianteById(this.loginForm.value.Eusername).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length >0)
        {     //si es mayor a cero, se ha encontrado el usuario 
          this.alumno ={
            id : this.userdata[0].id,
            Eusername: this.userdata[0].Eusername,
            Epassword: this.userdata[0].Epassword,
            Erole: this.userdata[0].Erole,
            isactive: this.userdata[0].isactive
          }
          if (this.alumno.Epassword === this.loginForm.value.Epassword)
          {
            if (this.alumno.isactive)
            { 
            //iniciamos session
            sessionStorage.setItem('Eusername', this.alumno.Eusername);
            sessionStorage.setItem('Erole', this.alumno.Erole);
            sessionStorage.setItem('ingresado', 'true');
            this.showToast('Sesión iniciada');
            this.router.navigateByUrl("/inicio-estudiante");
            }
            else{
              this.UserInactivo();
            }
          }
          else{
            this.Error();
          }
        }
        else{
          this.NoExiste();
          this.loginForm.reset();
        }

      })
    }
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({ 
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  async UserInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Error..',
      message: 'Alumno inactivo..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async Error(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Error..',
      message: 'Revise sus credenciales..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async NoExiste(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Error..',
      message: 'Alumn@ debe registrarse..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

}
