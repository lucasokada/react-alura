package com.example.bixoapi.dto.gameresult;

import com.example.bixoapi.dto.award.AwardRecoveredDto;
import com.example.bixoapi.model.Award;
import com.example.bixoapi.model.GameResult;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GameResultRecoveredDto {
  @NotBlank
  public String id;
  @NotBlank
  public LocalDateTime gameDate;
  @NotBlank
  public List<AwardRecoveredDto> awards;

  private List<AwardRecoveredDto> domainAwardListToDto(List<Award> awards) {
    List<AwardRecoveredDto> convertedAwards = new ArrayList<>();
    awards.forEach(domainAward -> convertedAwards.add(new AwardRecoveredDto(domainAward)));
    return convertedAwards;
  }

  public GameResultRecoveredDto(GameResult gameResult) {
    this.id = gameResult.getId();
    this.gameDate = gameResult.getGameDate();
    this.awards = domainAwardListToDto(gameResult.getAwards());
  }
}
