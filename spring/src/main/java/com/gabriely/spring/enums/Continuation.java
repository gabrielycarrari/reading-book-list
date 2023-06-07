package com.gabriely.spring.enums;

public enum Continuation {
    CONCLUIDED("concluided"), TO_BE_CONTINUED("to-be-continued");
    
    private String value;

    private Continuation(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }  
}
