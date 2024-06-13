import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '', 
    nome: '', 
    descricao: ''
  }

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById() {
    this.categoriaService.findById(this.categoria.id!).subscribe((resposta ) => {
      this.categoria.nome = resposta.nome
      this.categoria.descricao = resposta.descricao
    })
  }

  editar() {
    this.categoriaService.update(this.categoria).subscribe((resposta) =>{
      this.router.navigate(['categorias'])
      this.categoriaService.mensagem('Categoria atualizada com sucesso!')
    }, erro => {
      this.categoriaService.mensagem('validar se todos os campos estão preenchidos com no mínimo 3 caractéres!')
    });
  }

  cancelar() {
    this.router.navigate(['categorias'])
  }

}
