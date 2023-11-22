import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async getPicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      width: 600,
      resultType: CameraResultType.Uri
    }) 
  }

  onLogout(){
    this.authService.logoutA();
  }


  Alumno = sessionStorage.getItem('Eusername');

}
