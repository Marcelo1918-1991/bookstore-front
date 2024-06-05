import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/view/home/home.component';
import { CategoriaListarComponent } from './component/view/categorias/categoria-listar/categoria-listar.component';
import { CategoriaCreateComponent } from './component/view/categorias/categoria-create/categoria-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
