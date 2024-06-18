import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
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
  }

  create() {
    this.livroService.create(this.livro, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.livroService.mensagem('Livro criado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.livroService.mensagem('Erro ao tentar criar livro!')
    })
  }

  cancelar () {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
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
