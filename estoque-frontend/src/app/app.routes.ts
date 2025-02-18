import { Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoAddComponent } from './components/produto-add/produto-add.component';

export const routes: Routes = [
    { path: '', component: ProdutoListComponent },
    { path: 'add', component: ProdutoAddComponent }
];
