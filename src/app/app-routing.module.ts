import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/view/home/home.component';
import { CategoriaListarComponent } from './component/view/categorias/categoria-listar/categoria-listar.component';
import { CategoriaCreateComponent } from './component/view/categorias/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './component/view/categorias/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './component/view/categorias/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './component/view/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './component/view/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './component/view/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './component/view/livro/livro-delete/livro-delete.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },

  {
    path: 'categorias', 
    component: CategoriaListarComponent,
  },
  
  {
    path: 'categorias/create', 
    component: CategoriaCreateComponent,
  },

  {
    path: 'categorias/delete/:id', 
    component: CategoriaDeleteComponent,
  }, 

  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent,
  },

  {
    path: 'categorias/:id_cat/livros',
    component: LivroReadAllComponent
  }, 

  {
    path: 'categorias/:id_cat/livros/create',
    component: LivroCreateComponent
  },

  {
    path: 'categorias/:id_cat/livros/:id/update',
    component: LivroUpdateComponent
  },

  {
    path: 'categorias/:id_cat/livros/:id/delete',
    component: LivroDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
