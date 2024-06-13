import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById() {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome
      this.categoria.descricao = resposta.descricao
    })
  }

  delete() {
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria deletada com sucesso')
    }, err =>{
      this.service.mensagem("Categoria possui livros associados!")
    })
  }

  cancelar() {
    this.router.navigate(['categorias'])
  }

}
