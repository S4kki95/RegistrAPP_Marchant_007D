import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilactualizarDocentePageRoutingModule } from './perfilactualizar-docente-routing.module';

import { PerfilactualizarDocentePage } from './perfilactualizar-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilactualizarDocentePageRoutingModule
  ],
  declarations: [PerfilactualizarDocentePage]
})
export class PerfilactualizarDocentePageModule {}
