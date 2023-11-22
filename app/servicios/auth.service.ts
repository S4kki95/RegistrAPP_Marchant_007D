import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Profesor, Profesores, Estudiante, Estudiantes } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient,
              private router: Router) { }

  //Obtenemos toos los usuarios
  GetAllUsers():Observable<Profesores>{
    return this.httpclient.get<Profesores>(`${environment.apiUrl}/docente`);
  }
  //Obtenemos toos los usuarios por medio de su username
  //any se convierte en cualquier tipo de objeto
  GetDocenteById(codigo: any):Observable<Profesores>
  {
    return this.httpclient.get<Profesores>(`${environment.apiUrl}/docente/?username=${codigo}`);
  }

  GetEstudianteById(codigo: any):Observable<Estudiantes>
  {
    return this.httpclient.get<Estudiantes>(`${environment.apiUrl}/alumno/?Eusername=${codigo}`)
  }

  IsLogged(){
    return sessionStorage.getItem('Pusername')!=null;
  }

  IsLoggedA(){
    return sessionStorage.getItem('Eusername')!=null;
  }

  CrearDocente(newDocente: Profesor): Observable<Profesor>{
    return this.httpclient.post<Profesores>(`${environment.apiUrl}/docente`, newDocente);
  }

  CrearAlumno(newAlumno: Estudiante): Observable<Estudiante>{
    return this.httpclient.post<Estudiantes>(`${environment.apiUrl}/alumno`, newAlumno);
  }

  BuscarDocenteId(id:number):Observable<Profesores>{
    return this.httpclient.get<Profesores>(`${environment.apiUrl}/docente/?id=${id}`);
  }

  BuscarAlumnoId(id:number):Observable<Estudiantes>{
    return this.httpclient.get<Estudiantes>(`${environment.apiUrl}/alumno/?id=${id}`);
  }

  ActualizarDocente(docente:any):Observable<Profesores>{
    return this.httpclient.put<Profesores>(`${environment.apiUrl}/docente/${docente.id}`, docente);
  }

  ActualizarAlumno(alumno:any):Observable<Estudiantes>{
    return this.httpclient.put<Estudiantes>(`${environment.apiUrl}/alumno/${alumno.id}`, alumno);
  }

  verifyLogged(): any{
    const token = localStorage.getItem('Pusername');
    return !!token;
  }

  logout() {
    sessionStorage.removeItem('Pusername');
    sessionStorage.removeItem('ingresado');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']);
   }

   logoutA() {
    sessionStorage.removeItem('Eusername');
    sessionStorage.removeItem('ingresado');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login-alumno']);
   }

}
