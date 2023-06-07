package com.gabriely.spring.model;

import com.gabriely.spring.enums.Continuation;
import com.gabriely.spring.enums.Status;
import com.gabriely.spring.enums.converters.ContinuationConverter;
import com.gabriely.spring.enums.converters.StatusConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotBlank
    @NotNull
    @Column(length = 100, nullable = false) 
    private String title;

    @NotBlank
    @NotNull
    @Column(length = 50, nullable = false) 
    private String autor;
    
    @NotBlank
    @NotNull
    @Column(nullable = false) 
    private String synopsis;

    @Column(length = 100) 
    private String urlImage;

    @Column() 
    private String urlAmazon;
    
    @NotNull
    @Column(length = 8, nullable = false)
    @Convert(converter = StatusConverter.class)
    private Status status;

    @NotNull
    @Column(nullable = false) 
    private int numPages;

    @NotNull
    @Column(length = 16, nullable = false)
    @Convert(converter = ContinuationConverter.class)
    private Continuation continuation;
}
