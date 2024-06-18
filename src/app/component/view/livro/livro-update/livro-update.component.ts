import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';
@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  id_cat: any = ' '

  livro : Livro = {
    id: '',
    titulo: '',
    autor: '',
    texto: ''

  }
  form = new FormControl('', [Validators.minLength(3)]);
  autor = new FormControl('', [Validators.minLength(3)]);
  texto = new FormControl('', [Validators.minLength(10)]);

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

  update() {
    this.livroService.update(this.livro).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.livroService.mensagem('Livro atualizado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.livroService.mensagem('Falha ao atualizar livro :(')
    })
  }

  getMessage() {
    if (this.form.invalid) {
      return 'O campo TÍTULO deve conter entre 3 e 100 caractéres';
    }
    return false;
  }

  getMessageAutor() {
    if (this.autor.invalid) {
      return 'O campo NOME DO AUTOR deve conter entre 3 e 100 caractéres';
    }
    return false;
  }

  getMessageTexto() {
    if (this.texto.invalid) {
      return 'O campo NOME DO AUTOR deve conter entre 10 e 2.000.000 caractéres';
    }
    return false;
  }

}
