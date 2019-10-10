import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onLogin(login: string, senha: string): boolean {
    if (login === 'admin' && senha === '123') {
      sessionStorage.setItem('autenticado', 'sim');
      return true;
    } else {
      return false;
    }
  }

  onLogoff() {
    sessionStorage.clear();
    return true;
  }

  estaLogado() {
    if (sessionStorage.getItem('autenticado')) {
      return true;
    } else {
      return false;
    }
  }
}

