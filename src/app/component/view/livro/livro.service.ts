import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro-read-all/livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

   baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
  ) { }

  findAllByCategoria(id_cat:String):Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url)
  }

  findById(id: String):Observable<Livro> {
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.get<Livro>(url)
  }

  update(livro: Livro):Observable<Livro> {
    const url = `${this.baseUrl}/livros/${livro.id}`
    return this.http.put<Livro>(url, livro)
  }

  create (livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro)
  }

  delete (id: String): Observable<void>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(string: String) {
    this._snack.open(`${string}`, "OK", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })
  }
}
