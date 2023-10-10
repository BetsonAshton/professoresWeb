import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consulta-professor',
  templateUrl: './consulta-professor.component.html',
  styleUrls: ['./consulta-professor.component.css']
})

//implementando uma interface
export class ConsultaProfessorComponent  implements OnInit{

  professores: any[] = [];
  mensagem: string = '';


  //construtor
  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) {
  }


  //função executada no momento em que a página é aberta
  ngOnInit(): void {

    this.spinner.show();

    //fazendo a requisição para o serviço GET 
    //de consulta de produtos da API
    this.httpClient.get(environment.apiProfessores)
      .subscribe({ //capturando a resposta da API
        next: (data) => { //data -> nome dado para 
                          //capturar o retorno da consulta
         this.professores = data as any[];
          

        }
      }).add(() => {
        this.spinner.hide();
      })
    }

      onDelete(id: string): void {
        //verificar se o usuário deseja mesmo excluir o produto
        if(window.confirm('Deseja realmente excluir o professor?')) {      
          //exibindo o componente ngx-spinner
          this.spinner.show();
          //fazendo uma requisição para o endpoint DELETE da api
          this.httpClient.delete(environment.apiProfessores + "/" + id)
            .subscribe({
              next: (data: any) => {
                //exibindo mensagem de sucesso
                this.mensagem = `professor excluído com sucesso.`;  
                                 
                //recarregar a consulta de produtos
                this.ngOnInit();
              }
            })
            .add(() => {
                this.spinner.hide(); //fechando o spinner  
            })    
        }
      }
    

  }




