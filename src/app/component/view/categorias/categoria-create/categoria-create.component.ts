import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create() {
    
    if (!this.categoria.nome || this.categoria.nome.trim().length < 3 || this.categoria.nome.trim().length > 100) {
      this.categoriaService.mensagem('O campo NOME deve ter entre 3 e 100 caracteres.');
      return;
    }
  
    if (!this.categoria.descricao || this.categoria.descricao.trim().length < 3 || this.categoria.descricao.trim().length > 200) {
      this.categoriaService.mensagem('O campo DESCRIÇÃO deve ter entre 3 e 200 caracteres.');
      return;
    }
  
    this.categoriaService.create(this.categoria).subscribe(
      (resposta) => {
        this.categoriaService.mensagem('Categoria criada com sucesso!');
        this.router.navigate(['categorias']);
      })
  }
  
  cancelar() {
    this.router.navigate(['categorias'])
  }
  

}
