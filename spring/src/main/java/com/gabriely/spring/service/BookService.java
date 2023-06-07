package com.gabriely.spring.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.gabriely.spring.dto.BookDTO;
import com.gabriely.spring.dto.mapper.BookMapper;
import com.gabriely.spring.repository.BookRepository;


@Validated  
@Service
public class BookService {
    private final BookRepository bookRepository;
    private final BookMapper bookMapper;

    public BookService (BookRepository bookRepository, BookMapper bookMapper) {
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
    }

    public List<BookDTO> list() {
        return bookRepository.findAll()
            .stream()
            .map(bookMapper::toDTO)
            .collect(Collectors.toList());
    }

    
}
