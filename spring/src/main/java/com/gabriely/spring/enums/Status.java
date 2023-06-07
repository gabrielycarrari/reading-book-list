package com.gabriely.spring.enums;

public enum Status {
    READED("Readed"), READING("Reading"), TO_READ("To-read");

    private String value;

    private Status(String value) {
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
