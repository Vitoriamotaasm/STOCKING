import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listarTodos: any;
  deletar: any;
  salvar: any;

  constructor() { }
}
