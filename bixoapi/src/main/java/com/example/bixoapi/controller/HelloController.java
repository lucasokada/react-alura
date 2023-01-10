package com.example.bixoapi.controller;

import com.example.bixoapi.model.utils.GameResultExtractor;
import com.example.bixoapi.model.utils.Requester;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

  @GetMapping
  public String helloWorld() {
    System.out.println("aquiii!");
    Requester requester = new Requester();
    String responseBody = requester.makeRequest();
    System.out.println("response -= " + responseBody);
    GameResultExtractor extractor = new GameResultExtractor(responseBody, 1);
    System.out.println(extractor.extractColumnResult());
    extractor.setToNextColumn();
    System.out.println(extractor.extractColumnResult());
    extractor.setToNextColumn();
    System.out.println(extractor.extractColumnResult());
    extractor.setToNextColumn();
    System.out.println(extractor.extractColumnResult());
    extractor.setToNextColumn();
    System.out.println(extractor.extractColumnResult());
    return "Hello World";
  }
}
