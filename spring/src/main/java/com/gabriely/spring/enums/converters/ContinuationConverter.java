package com.gabriely.spring.enums.converters;

import java.util.stream.Stream;

import com.gabriely.spring.enums.Continuation;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class ContinuationConverter implements AttributeConverter<Continuation, String>{

    @Override
    public String convertToDatabaseColumn(Continuation continuation) {
        if (continuation == null) {
            return null;
        }
        return continuation.getValue();
    }

    @Override
    public Continuation convertToEntityAttribute(String value) {
        if (value == null) {
            return null;
        }
        return Stream.of(Continuation.values())
                .filter(c -> c.getValue().equals(value))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);    
    }
    
}
