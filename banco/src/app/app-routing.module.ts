import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BuscaDetalhadaComponent } from './busca-detalhada/busca-detalhada.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { FazerCadastroComponent } from './fazer-cadastro/fazer-cadastro.component';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuComponent, canActivate: [AuthguardGuard] },
  {path:'detalhes', component:BuscaDetalhadaComponent, canActivate: [AuthguardGuard]},
  {path:'cadastro', component:FazerCadastroComponent, canActivate: [AuthguardGuard]},
  {path:'atualizar/:cocliente', component:AtualizarClienteComponent, canActivate: [AuthguardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
