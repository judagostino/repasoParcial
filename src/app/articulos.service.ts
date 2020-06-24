import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Articulo } from "../models/articulos";

@Injectable({
  providedIn:'root'
})
export class ArticulosService {
resourceUrl: string;
  
  constructor(private httpCliente: HttpClient) { 
      this.resourceUrl= "http://localhost:49681/api/articulos";
  }

  get(Nombre: string, Activo: boolean, Pagina: number) {
    let params = new HttpParams();
    if (Nombre != null) {
      params = params.append("Nombre", Nombre);
    }
    if (Activo != null) {   // para evitar error de null.ToString()
      params = params.append("Activo", Activo.toString());
    }
    params = params.append("Pagina", Pagina.toString());

    return this.httpCliente.get(this.resourceUrl, { params: params });
  }

  getById(Id: number) {
    return this.httpCliente.get(this.resourceUrl + Id);
  }

  post(obj:Articulo) {
    return this.httpCliente.post(this.resourceUrl, obj);
  }

  put(Id: number, obj:Articulo) {
    return this.httpCliente.put(this.resourceUrl + Id, obj);
  }

  delete(Id) {
    return this.httpCliente.delete(this.resourceUrl + Id);
  }
}


