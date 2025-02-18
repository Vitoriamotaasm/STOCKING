package com.example.estoque_backend.model;

import jakarta.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String contato;

    @OneToMany(mappedBy = "fornecedor")
    private List<Produto> produtos;

    // Construtores
    public Fornecedor() {}

    public Fornecedor(Long id, String nome, String contato, List<Produto> produtos) {
        this.id = id;
        this.nome = nome;
        this.contato = contato;
        this.produtos = produtos;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }

    // toString
    @Override
    public String toString() {
        return "Fornecedor{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", contato='" + contato + '\'' +
                '}';
    }

    // equals e hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Fornecedor fornecedor = (Fornecedor) o;
        return Objects.equals(id, fornecedor.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
