package com.gabriely.spring.enums;

public enum Continuation {
    CONCLUIDED("Concluided"), TO_BE_CONTINUED("To-be-Continued");
    
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
