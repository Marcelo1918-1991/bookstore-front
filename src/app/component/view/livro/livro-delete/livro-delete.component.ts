import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  id_cat: any = ' '

  livro : Livro = {
    id: '',
    titulo: '',
    autor: '',
    texto: ''

  }


  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')
    this.livro.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  cancelar () {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

  findById() {
    this.livroService.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta
    })
  }
  delete() {
    this.livroService.delete(this.livro.id!).subscribe((resposta) => {
      console.log('resposta')
      console.log(resposta)
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.livroService.mensagem('Livro deletado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.livroService.mensagem('Erro ao deletar livro!')
      
    })
  }
}
