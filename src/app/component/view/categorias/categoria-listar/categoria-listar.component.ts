import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/component/view/categorias/categoria.service';
import { Categoria } from '../categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  categorias: Categoria[] = [];

  constructor(
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.categorias = resposta;
    }

    )
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["categorias/create"])
    console.log('teste')
  }

}
