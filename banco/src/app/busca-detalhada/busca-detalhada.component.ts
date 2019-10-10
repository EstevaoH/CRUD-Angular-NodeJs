import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-detalhada',
  templateUrl: './busca-detalhada.component.html',
  styleUrls: ['./busca-detalhada.component.css']
})
export class BuscaDetalhadaComponent implements OnInit {

  cliente: Cliente;
  mensagem = '';
  habilitarBotao = false;

  constructor(private cl: ClienteService, private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }

  buscarCliente() {
    this.mensagem = '';
    this.habilitarBotao = false;
    this.cl.buscarCliente(this.cliente.cocliente).subscribe(
      res => {
        if (res[0]) {
          this.habilitarBotao = true;
          this.cliente = res[0];
        }
        else{
          this.mensagem = 'Usuário não existe';
        }
        console.log(res[0]);
      }
    );
  };

  apagarCliente(cocliente){
    console.log('Apagado')
    this.cl.deletarCliente(cocliente).subscribe(
      res =>{
        this.cliente = res;
      }
    );
  };

  atualizarCliente(cocliente){
    this.router.navigate(['/atualizar', cocliente]);
  }

}
