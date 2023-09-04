import { Component } from '@angular/core';

interface Menu{
  name:string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  menu : Menu[]=[
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Login',
      redirecTo: '/login',
      icon: 'id-card-outline'
    },
    {
      name: 'Registrar',
      redirecTo: '/registro',
      icon: 'person-add-outline'
    },
    {
      name: 'Informacion',
      redirecTo: '/informacion',
      icon: 'alert-circle-outline'
    },

  ]
}
