import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[];


  private url = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente>{
    return this.http.get<Cliente>(this.url);
  };

  cadastraCliente(clientes: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, clientes);
  };

  buscarCliente(co: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.url + '/' + co);
  };

  atualizarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente)
  }

  deletarCliente(co: number): Observable<Cliente>{
    return this.http.delete<Cliente>(this.url + '/' + co);
  };
}
