import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BuscaDetalhadaComponent } from './busca-detalhada/busca-detalhada.component';
import { FazerCadastroComponent } from './fazer-cadastro/fazer-cadastro.component';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    BuscaDetalhadaComponent,
    FazerCadastroComponent,
    AtualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
