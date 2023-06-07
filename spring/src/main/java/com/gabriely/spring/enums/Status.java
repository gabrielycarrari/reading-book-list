package com.gabriely.spring.enums;

public enum Status {
    READED("readed"), READING("reading"), TO_READ("to-read");

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
