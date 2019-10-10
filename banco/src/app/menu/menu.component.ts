import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  clientes: Cliente;

  constructor(private cl: ClienteService ){
    this.clientes = new Cliente();
  }

  ngOnInit() {
    this.cl.listarClientes().subscribe(
      res =>{
        this.clientes = res;
        console.log(res)
      }
      
    )
    }
}