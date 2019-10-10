import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fazer-cadastro',
  templateUrl: './fazer-cadastro.component.html',
  styleUrls: ['./fazer-cadastro.component.css']
})
export class FazerCadastroComponent implements OnInit {

  clientes: Cliente;
  menssagem = '';

  constructor( private cli: ClienteService, private http: HttpClient) { 
    this.clientes = new Cliente();
  }

  ngOnInit() {
  }

  cadastra(){
    this.menssagem = '';
    this.cli.cadastraCliente(this.clientes).subscribe(
      res =>{
        if(res){
          this.menssagem = "Usuario cadastrado com sucesso !!!";
          this.clientes = res;
        }else{
          this.menssagem = "Usuario não cadastrado... ";
        };
      }
    )

  }

}
