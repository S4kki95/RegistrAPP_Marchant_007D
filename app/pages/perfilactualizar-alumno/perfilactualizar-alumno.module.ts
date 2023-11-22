import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilactualizarAlumnoPageRoutingModule } from './perfilactualizar-alumno-routing.module';

import { PerfilactualizarAlumnoPage } from './perfilactualizar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilactualizarAlumnoPageRoutingModule
  ],
  declarations: [PerfilactualizarAlumnoPage]
})
export class PerfilactualizarAlumnoPageModule {}
