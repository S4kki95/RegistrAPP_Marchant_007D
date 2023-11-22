import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  userdata: any;

  loginForm: FormGroup;

  docente={
    id: 0,
    Pusername:"",
    Ppassword:"",
    role:"",
    isactive: false
  }

  constructor(private authservice: AuthService,
    private router: Router,
    private alertcontroller: AlertController,
    private toastcontroller: ToastController,
    private fbuilder: FormBuilder) {
      this.loginForm = this.fbuilder.group({
        'Pusername' : new FormControl("", [Validators.required, Validators.minLength(4)]),
        'Ppassword' : new FormControl("", [Validators.required, Validators.minLength(4)])
      })
     }

  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetDocenteById(this.loginForm.value.Pusername).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length >0)
        {     //si es mayor a cero, se ha encontrado el usuario 
          this.docente ={
            id : this.userdata[0].id,
            Pusername: this.userdata[0].username,
            Ppassword: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          if (this.docente.Ppassword === this.loginForm.value.Ppassword)
          {
            if (this.docente.isactive)
            { 
            //iniciamos session
            sessionStorage.setItem('Pusername', this.docente.Pusername);
            sessionStorage.setItem('role', this.docente.role);
            sessionStorage.setItem('ingresado', 'true');
            this.showToast('Sesión iniciada');
            this.router.navigateByUrl("/inicio");
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
      message: 'Usuario inactivo..',
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
      message: 'Usuari@ debe registrarse..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

}
