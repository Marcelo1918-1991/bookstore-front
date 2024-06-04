import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/component/views/categorias/categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  categorias: Categoria[] = [];

  constructor(private service: CategoriaService) { }

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
 

}
