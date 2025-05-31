import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Festivo } from '../../shared/entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  fechaSeleccionada: Date | null = null;
   url:string ;
 

  constructor(private http: HttpClient) {
    this.url= `${environment.urlAPI}festivos/`
   }

   public listarFestivos(year: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}listarFestivos/${ year }`);
  }

  public comprobarFecha(fechaIngresada: string): Observable<string> {
    return this.http.post<string>(
      `${this.url}comprobarFecha`,
      fechaIngresada, // el string va directo en el body
      { responseType: 'text' as 'json' } // para que Angular espere texto, no JSON
    );
  }
  
  
  

   
}
