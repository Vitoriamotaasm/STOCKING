package com.example.estoque_backend.repository;

import com.example.estoque_backend.model.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
    
}
