import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {

  clientes: Cliente;
  menssagem = '';

  constructor(private cli: ClienteService, private http: HttpClient, private rotas: ActivatedRoute) {
    this.clientes = new Cliente();
  }

  ngOnInit() {
    this.rotas.paramMap.subscribe((res: any) => {
      let cocliente: number;
      cocliente = res.params.cocliente;
      this.buscarCliente(cocliente);
      });
  }

  buscarCliente(cocliente) {

    this.cli.buscarCliente(cocliente).subscribe(
      res => {
        if (res[0]) {
          this.clientes = res[0];
        }
        console.log(res[0]);
      }
    );
  };

  atualizarCliente() {
    this.cli.atualizarCliente(this.clientes).subscribe(
      res => {
        if (res) {
          this.menssagem = "Usuario atualizado com sucesso !!!";
          this.clientes = res;
        } else {
          this.menssagem = "Não foi possivel fazer a atualização do cliente.";
        };
      }
    );
  };

}
