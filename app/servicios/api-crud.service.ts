import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anime } from '../pages/interfaces/interfaces';
import { Dato, Datos } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }


  listarAnime():Observable<Anime>{
    return this.httpclient.get<Anime>(`${environment.apiUrl}/anime`);
  }

  CrearDato(newDato: Dato): Observable<Dato>{
    return this.httpclient.post<Datos>(`${environment.apiUrl}/datosQr`, newDato);
  }

}
