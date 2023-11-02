import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idocentes } from '../interfaces/idocentes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Idocente } from '../interfaces/idocente';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(private http:HttpClient) { }

  listarDocentes(): Observable<Idocentes>{
    return this.http.get<Idocentes>(`${environment.apiURL}/docentes`)
  }

  crearDocente(newDocente: Idocente): Observable<Idocente>{
    return this.http.post<Idocente>(`${environment.apiURL}/docentes`, newDocente)
  }

  actualizarDocente(docente: any): Observable<Idocentes>{
    return this.http.put<Idocentes>(`${environment.apiURL}/docentes/${docente.id}`, docente)
  }

  BuscarDocenteId(id:number):Observable<Idocentes>{
    return this.http.get<Idocentes>(`${environment.apiURL}/docentes/?id=${id}`);
  }

  eliminarDocente(docente: any): Observable<Idocentes>{
    return this.http.delete<Idocentes>(`${environment.apiURL}/docentes/${docente.id}`)
  }
  
  
}
