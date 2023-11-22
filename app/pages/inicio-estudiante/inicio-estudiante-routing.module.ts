import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioEstudiantePage } from './inicio-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: InicioEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioEstudiantePageRoutingModule {}
