package com.example.bixoapi.model.exceptions;

public class InvalidGameResultException extends RuntimeException {
  public InvalidGameResultException(String message) {
    super(message);
  }
}
