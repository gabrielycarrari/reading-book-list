package com.gabriely.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriely.spring.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}
