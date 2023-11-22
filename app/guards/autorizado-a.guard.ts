import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoAGuard {

  constructor(private authservice: AuthService, 
              private router: Router,
              private toastcontroller: ToastController){}

  canActivate():

   | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authservice.IsLoggedA())
      {
        this.showToast('Debe iniciar sesion como alumno');
        this.router.navigateByUrl("/login-alumno");
        return false;
      }

      return true;
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({ 
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  
}
