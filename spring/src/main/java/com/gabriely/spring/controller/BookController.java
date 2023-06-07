package com.gabriely.spring.controller;

import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriely.spring.dto.BookDTO;
import com.gabriely.spring.service.BookService;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;
    
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<BookDTO> list() {
        return bookService.list();
    }

    @GetMapping("/{id}")
    public BookDTO findById(@PathVariable @NotNull @Positive Long id) {
        return bookService.findById(id);
    }
}
