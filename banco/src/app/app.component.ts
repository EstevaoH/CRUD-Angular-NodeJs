import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banco';

  constructor(private loginService: LoginService, private router: Router) { }

  onLogoff(event: MouseEvent) {
    event.preventDefault();
    if (this.loginService.onLogoff()) {
      this.router.navigate(['/login']);
    }
  }

  estaLogado() {
    return this.loginService.estaLogado();
  }
}
