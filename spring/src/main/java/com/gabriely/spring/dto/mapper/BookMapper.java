package com.gabriely.spring.dto.mapper;

import org.springframework.stereotype.Component;

import com.gabriely.spring.dto.BookDTO;
import com.gabriely.spring.enums.Continuation;
import com.gabriely.spring.enums.Status;
import com.gabriely.spring.model.Book;

@Component
public class BookMapper {
    public BookDTO toDTO(Book book) {
        if (book == null){
            return null;
        }
        return new BookDTO(
            book.getId(), 
            book.getTitle(), 
            book.getAutor(),
            book.getSynopsis(),
            book.getUrlImage(),
            book.getUrlAmazon(),
            book.getStatus().getValue(),
            book.getNumPages(),
            book.getContinuation().getValue());
    }

    public Book toEntity(BookDTO bookDTO) {
        if (bookDTO == null) {
            return null;
        }
        
        Book book = new Book();
        if (bookDTO.id() != null){
            book.setId(bookDTO.id());
        }
        book.setTitle(bookDTO.title()); 
        book.setAutor(bookDTO.autor());
        book.setSynopsis(bookDTO.synopsis());
        book.setUrlImage(bookDTO.urlImage());
        book.setUrlAmazon(bookDTO.urlAmazon());
        book.setStatus(convertStatusValue(bookDTO.status()));
        book.setNumPages(bookDTO.numPages());
        book.setContinuation(convertContinuationValue(bookDTO.continuation()));
       
        return book;
    }

    public Continuation convertContinuationValue (String value) {
        if (value == null) {
            return null;
        }
        return switch (value) {
            case "concluided" -> Continuation.CONCLUIDED;
            case "to-be-continued" -> Continuation.TO_BE_CONTINUED;
            default -> throw new IllegalArgumentException("Continuação inválida: " + value);
        };
    }

    public Status convertStatusValue (String value) {
        if (value == null) {
            return null;
        }
        return switch (value) {
            case "readed" -> Status.READED;
            case "reading" -> Status.READING;
            case "to-read" -> Status.TO_READ;
            default -> throw new IllegalArgumentException("Status inválido: " + value);
        };
    }
}
