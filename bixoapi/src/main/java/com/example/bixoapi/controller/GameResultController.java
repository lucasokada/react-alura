package com.example.bixoapi.controller;

import com.example.bixoapi.dto.award.AwardRecoveredDto;
import com.example.bixoapi.dto.award.AwardStorageDto;
import com.example.bixoapi.dto.gameresult.GameResultRecoveredDto;
import com.example.bixoapi.dto.gameresult.GameResultStorageDto;
import com.example.bixoapi.model.GameResult;
import com.example.bixoapi.model.utils.GameResultExtractor;
import com.example.bixoapi.model.utils.Requester;
import com.example.bixoapi.repository.AwardRepository;
import com.example.bixoapi.repository.GameResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/gameResult")
public class GameResultController {
  @Autowired
  private GameResultRepository gameResultRepository;

  @Autowired
  private AwardRepository awardRepository;


  private Requester requester = new Requester();
  private String responseBody = requester.makeRequest();
  private GameResultExtractor extractor = new GameResultExtractor(responseBody);
  private final int gameAwardsCount = 5;

  @GetMapping
  public void getTodayGameResult() {
    var gameResultsQuantity = gameResultRepository.count();
    if(gameResultsQuantity > 0) {
      Optional<GameResult> recoveredResult = gameResultRepository.findById(gameResultsQuantity - 1);
      if(recoveredResult.isPresent()) {
        GameResultRecoveredDto gameResultRecoveredDto = new GameResultRecoveredDto(recoveredResult.get());
        System.out.println("aquiiii");

      }
    } else {
      System.out.println("entrou aqui!!");
      List<List<String>> gameResults = extractor.extractResultAwards();
      for(int i = 0; i < gameResults.size(); i++) {
        GameResultStorageDto result = new GameResultStorageDto(i + 1);
        System.out.println("result = " + result);
        for(int j = 0; j < gameResults.get(i).size(); j++) {
          AwardStorageDto award = new AwardStorageDto(j + 1, gameResults.get(i).get(j));
          result.awards.add(award);
        }
        System.out.println("result = " + result.toString());
        gameResultRepository.save(result.toDomain());
      }
    }

  }
}
