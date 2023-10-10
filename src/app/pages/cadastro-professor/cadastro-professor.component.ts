import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css'],
})
export class CadastroProfessorComponent {
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),

    matricula: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
    ]),

    cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
  });

  //função para exibir as mensagens de erro de validação
  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {
    //exibir o componente do ngx-spinner
    this.spinner.show();

    //acessando o endpoint de cadastro de produto da API
    this.httpClient
      .post(environment.apiProfessores, this.formCadastro.value)
      .subscribe({
        //capturado o retorno da API
        next: (data: any) => {
          
          this.mensagem = `Professor cadastrado com sucesso.`;
                        

          this.formCadastro.reset();
        },
      })
      .add(() => {
        //fechando o componente ngx-spinner
        this.spinner.hide();
      });
  }
}
