import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { ConsultaProfessorComponent } from './pages/consulta-professor/consulta-professor.component';
import { EdicaoProfessorComponent } from './pages/edicao-professor/edicao-professor.component';

//mapeando rotas de navegação
const routes: Routes =[
{path:'cadastro-professor', component:CadastroProfessorComponent},
{path:'consulta-professor', component:ConsultaProfessorComponent},
{path:'edicao-professor/:id', component:EdicaoProfessorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroProfessorComponent,
    ConsultaProfessorComponent,
    EdicaoProfessorComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),//registrando as rotas
    HttpClientModule, //registrando a bilbioteca HTTPCLIENT
    BrowserAnimationsModule, //biblioteca para animações
    NgxSpinnerModule, //biblioteca do componente spinner
    FormsModule, //formulários reativos
    ReactiveFormsModule //formulários reativos

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
