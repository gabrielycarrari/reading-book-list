package com.gabriely.spring.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.gabriely.spring.dto.BookDTO;
import com.gabriely.spring.dto.mapper.BookMapper;
import com.gabriely.spring.exception.RecordNotFoundException;
import com.gabriely.spring.repository.BookRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;


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

    public BookDTO findById(@NotNull @Positive Long id) {
        return bookRepository.findById(id).map(bookMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public BookDTO create(@Valid @NotNull BookDTO book){
        return bookMapper.toDTO(bookRepository.save(bookMapper.toEntity(book)));
    }

    public BookDTO update(@NotNull @Positive Long id, @Valid @NotNull BookDTO book) {
        return bookRepository.findById(id)
            .map(recordFound-> {
                recordFound.setTitle(book.title());
                recordFound.setAutor(book.autor());
                recordFound.setSynopsis(book.synopsis());
                recordFound.setUrlImage(book.urlImage());
                recordFound.setUrlAmazon(book.urlAmazon());
                recordFound.setStatus(bookMapper.convertStatusValue(book.status()));
                recordFound.setNumPages(book.numPages());
                recordFound.setContinuation(bookMapper.convertContinuationValue(book.continuation()));
                return bookMapper.toDTO(bookRepository.save(recordFound));
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }
}
