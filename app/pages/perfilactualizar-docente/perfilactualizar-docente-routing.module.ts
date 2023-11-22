import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilactualizarDocentePage } from './perfilactualizar-docente.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilactualizarDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilactualizarDocentePageRoutingModule {}
