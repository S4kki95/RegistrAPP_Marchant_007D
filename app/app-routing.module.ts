import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { AutorizadoAGuard } from './guards/autorizado-a.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'anime',
    loadChildren: () => import('./pages/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule)
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule)
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'inicio-estudiante',
    loadChildren: () => import('./pages/inicio-estudiante/inicio-estudiante.module').then( m => m.InicioEstudiantePageModule),
    canActivate:[AutorizadoAGuard]
  },
  {
    path: 'perfilactualizar-docente',
    loadChildren: () => import('./pages/perfilactualizar-docente/perfilactualizar-docente.module').then( m => m.PerfilactualizarDocentePageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'perfil-alumno',
    loadChildren: () => import('./pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule),
    canActivate:[AutorizadoAGuard]
  },
  {
    path: 'perfilactualizar-alumno',
    loadChildren: () => import('./pages/perfilactualizar-alumno/perfilactualizar-alumno.module').then( m => m.PerfilactualizarAlumnoPageModule),
    canActivate:[AutorizadoAGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
