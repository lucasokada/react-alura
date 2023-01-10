package com.example.bixoapi.controller;

import com.example.bixoapi.model.utils.GameResultExtractor;
import com.example.bixoapi.model.utils.Requester;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/awardResult")
public class AwardResultController {

  @GetMapping
  public ResponseEntity<List<List<String>>> getTodayGameResult() {
    Requester requester = new Requester();
    String responseBody = requester.makeRequest();
    GameResultExtractor extractor = new GameResultExtractor(responseBody);
    List<List<String>> gameResults = extractor.extractResultAwards();

    return ResponseEntity.ok().body(gameResults);
  }
}
