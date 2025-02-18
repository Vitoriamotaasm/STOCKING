import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../model/produto.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  imports: [MatTableModule, MatIconModule, CommonModule],
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];
  dataSource = new MatTableDataSource<Produto>(); 
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'quantidadeEstoque', 'acoes'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listarTodos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      this.dataSource.data = produtos;
    });
  }

  deletarProduto(id: number): void {
    this.produtoService.deletar(id).subscribe(() => {
      this.carregarProdutos();
      this.carregarProdutos();
    });
  }
}