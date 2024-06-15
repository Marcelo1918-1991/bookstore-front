import { Component, OnInit } from '@angular/core';
import { Livro } from './livro.model';
import { LivroService } from '../livro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
  ) { }

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  id_cat: any = ''

  livros: Livro[] = []

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')
    this.findAll()
  }

  findAll() {
    this.livroService.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta
      console.log(this.livros)
    })
  }

}
