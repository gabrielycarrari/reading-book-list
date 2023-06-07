package com.gabriely.spring.dto;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;   

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record BookDTO(
        Long id, 
        @NotBlank @NotNull @Length(min = 2, max = 100) String title, 
        @NotNull @Length(max = 50) String autor,
        @NotNull String synopsis,
        @Length(max = 100) String urlImage,
        String urlAmazon,
        @NotNull @Length(max = 8) @Pattern(regexp = "readed|reading|to-read") String status,
        @NotNull int numPages,
        @NotNull @Length(max = 50) @Pattern(regexp = "concluided|to-be-continued") String continuation
        ) {
    
}
