

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalvarCursoComponent } from './salvar-curso/salvar-curso.component';
import { FormsModule } from '@angular/forms'
import { ListarCursoComponent } from './listar-curso/listar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    SalvarCursoComponent,
    ListarCursoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
