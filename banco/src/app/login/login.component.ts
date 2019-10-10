import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientes: Cliente;
  login: '';
  senha: '';
  erro: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginService.onLogin(this.login, this.senha)) {
      this.erro = 'Usuario valido';
      this.router.navigate(['/menu']);
      console.log(this.erro)
    } else {
      this.erro = 'Usuário ou senha inválidos!';
      console.log(this.erro)
    }
  }
}
