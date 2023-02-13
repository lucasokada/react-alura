package com.example.bixoapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Table(name = "award")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Award {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "award_number")
  private int awardNumber;
  private String result;

  @Column(name = "game_result_id")
  private String gameResultId;


  public Long getId() {
    return id;
  }

  public int getAwardNumber() {
    return awardNumber;
  }

  public String getResult() {
    return result;
  }

  public Award(Long id, Integer awardNumber, String result) {
    this.id = id;
    this.awardNumber = awardNumber;
    this.result = result;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setAwardNumber(int awardNumber) {
    this.awardNumber = awardNumber;
  }

  public void setResult(String result) {
    this.result = result;
  }

  public String getGameResultId() {
    return gameResultId;
  }

  public void setGameResultId(String gameResultId) {
    this.gameResultId = gameResultId;
  }
}
