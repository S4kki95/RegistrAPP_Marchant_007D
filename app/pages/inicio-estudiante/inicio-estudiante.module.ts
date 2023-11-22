import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioEstudiantePageRoutingModule } from './inicio-estudiante-routing.module';

import { InicioEstudiantePage } from './inicio-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioEstudiantePageRoutingModule
  ],
  declarations: [InicioEstudiantePage]
})
export class InicioEstudiantePageModule {}
