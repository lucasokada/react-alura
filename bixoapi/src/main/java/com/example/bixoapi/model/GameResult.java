package com.example.bixoapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Table(name = "game_result", schema = "jogobixoapi")
@Entity(name = "game_result")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class GameResult {
  @Id
  private String id;

  @Column(columnDefinition = "TIMESTAMP")
  private LocalDateTime gameDate;

  @OneToMany(cascade = CascadeType.PERSIST)
  @JoinColumn(name = "game_result_id", referencedColumnName = "id")
  private List<Award> awards;

  public GameResult(LocalDateTime gameDate, List<Award> awards) {
    this.gameDate = gameDate;
    this.id = UUID.nameUUIDFromBytes(gameDate.toString().getBytes()).toString();
    this.awards = awards;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public LocalDateTime getGameDate() {
    return gameDate;
  }

  public void setGameDate(LocalDateTime gameDate) {
    this.gameDate = gameDate;
  }

  public List<Award> getAwards() {
    return awards;
  }

  public void setAwards(List<Award> awards) {
    this.awards = awards;
  }
}
