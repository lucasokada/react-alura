package com.example.bixoapi.model.utils;

import com.example.bixoapi.model.exceptions.InvalidGameResultException;
import com.example.bixoapi.model.exceptions.ResultTagNotFoundException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class GameResultExtractor {
  private String requestBody;
  private int columnNumber;
  private final int resultLength = 6;

  public GameResultExtractor(String requestBody) {
    this.requestBody = requestBody;
    this.columnNumber = 1;
  }

  public GameResultExtractor(String requestBody, int columnNumber) {
    this.requestBody = requestBody;
    this.columnNumber = columnNumber;
  }

  public LocalDate extractGameDate() {
    final int dateLength = 10;
    final String gameDate = "";
    final String resultTag = "<time datetime=\"";
    final int indexOfResultTag = requestBody.indexOf(resultTag);

    if(indexOfResultTag != -1) {
      final int resultBeginIndex = indexOfResultTag + resultTag.length();
      final int resulEndIndex = resultBeginIndex + dateLength;
      String[] gameResult = requestBody.substring(resultBeginIndex, resulEndIndex).split("-");
      final LocalDate date = LocalDate.of(
        Integer.parseInt(gameResult[0]),
        Integer.parseInt(gameResult[1]),
        Integer.parseInt(gameResult[2])
      );

      return date;
    } else {
      throw new ResultTagNotFoundException("ResultTagNotFoundException occurred. HTML result tag not found");
    }
  }

  private String extractResult() {
    final String invalidResult = "0000-0";
    final String resultTag = "<td id=\"col" + columnNumber + "\" class=\"yesc\">";
    int indexOfResultTag = requestBody.indexOf(resultTag);

    if(indexOfResultTag != -1) {
      final int resultBeginIndex = indexOfResultTag + resultTag.length();
      final int resultEndIndex = resultBeginIndex + resultLength;
      String gameResult = requestBody.substring(resultBeginIndex, resultEndIndex);
      requestBody = requestBody.replaceFirst(resultTag, "");
      if(gameResult.equals(invalidResult)) {
        throw new InvalidGameResultException("InvalidGameResultException occurred. Probably this game result " +
                "wasn't published yet");
      }
      return gameResult;
    } else {
      throw new ResultTagNotFoundException("ResultTagNotFoundException occurred. HTML result tag not found");
    }
  }

  public ArrayList<String> extractColumnResult() {
    ArrayList<String> columnResults = new ArrayList<>();
    try {
      while(true) {
        String columnResult = extractResult();
        columnResult = columnResult.replace("<", "");
        columnResults.add(columnResult);
      }
    } catch (ResultTagNotFoundException | InvalidGameResultException e) {
      System.out.println(e.getMessage());
    } finally {
      return columnResults;
    }
  }

  public List<List<String>> extractResultAwards() {
    Requester requester = new Requester();
    String responseBody = requester.makeRequest();
    GameResultExtractor extractor = new GameResultExtractor(responseBody, 1);
    final int dailyGameResultsQuantity = 5;
    List<List<String>> gameResults = new ArrayList<>();

    for (int i = 0; i < dailyGameResultsQuantity; i++) {
      System.out.println("column number = " + extractor.getColumnNumber());
      var result = extractor.extractColumnResult();
      gameResults.add(result);
      extractor.setToNextColumn();
    }

    return gameResults;
  }

  public void setToNextColumn() {
    this.columnNumber++;
  }

  public int getColumnNumber() {
    return columnNumber;
  }
}

