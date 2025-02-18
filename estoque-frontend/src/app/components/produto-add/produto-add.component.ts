
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../model/produto.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  imports: [ CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  styleUrls: ['./produto-add.component.css']
})
export class ProdutoAddComponent {
  produto: Produto = {
    nome: '',
    descricao: '',
    preco: 0,
    quantidadeEstoque: 0
  }; // Objeto Produto para o formulário

  constructor(private produtoService: ProdutoService, private router: Router) {}

  salvarProduto(): void {
    this.produtoService.salvar(this.produto).subscribe(() => {
      this.router.navigate(['/']); // Navega de volta para a lista após salvar
    });
  }
}