import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
   url:string ;

  constructor(private http: HttpClient) {
    this.url=`${environment,urlAPI}festivos/`
   }
}
