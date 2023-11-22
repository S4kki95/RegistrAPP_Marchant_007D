import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController,
              private authService   : AuthService) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  onLogout(){
    this.authService.logout();
  }


  Docente = sessionStorage.getItem('Pusername');

}
