export interface Produto {
    id?: number; // Opcional, pois o ID é gerado pelo backend
    nome: string;
    descricao: string;
    preco: number;
    quantidadeEstoque: number;
    categoria?: any; // Opcional, dependendo da sua implementação
    fornecedor?: any; // Opcional, dependendo da sua implementação
  }