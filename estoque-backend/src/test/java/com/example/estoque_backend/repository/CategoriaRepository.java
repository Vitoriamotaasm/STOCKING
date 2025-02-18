package com.example.estoque_backend.repository;

import com.example.estoque_backend.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    
}
