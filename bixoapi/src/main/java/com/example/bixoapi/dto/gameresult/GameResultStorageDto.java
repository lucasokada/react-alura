package com.example.bixoapi.dto.gameresult;

import com.example.bixoapi.dto.award.AwardRecoveredDto;
import com.example.bixoapi.dto.award.AwardStorageDto;
import com.example.bixoapi.model.Award;
import com.example.bixoapi.model.GameResult;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.cglib.core.Local;
import org.springframework.format.annotation.DateTimeFormat;

import javax.swing.text.DateFormatter;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GameResultStorageDto {
  @NotBlank
  public LocalDateTime gameDate;
  @NotBlank
  public List<AwardStorageDto> awards;

  private LocalTime getGameResultHour(int dateIndicator) {
    switch (dateIndicator) {
      case 1:
        return LocalTime.of(11, 0);
      case 2:
        return LocalTime.of(14, 0);
      case 3:
        return LocalTime.of(16, 0);
      case 4:
        return LocalTime.of(18, 0);
      case 5:
        return LocalTime.of(21, 0);
    }

    return LocalTime.now();
  }

  public GameResultStorageDto(int dateIndicator) {
    LocalDate todayDate = LocalDate.now();
    LocalTime time = getGameResultHour(dateIndicator);

    this.gameDate = LocalDateTime.of(
      todayDate.getYear(),
      todayDate.getMonth(),
      todayDate.getDayOfMonth(),
      time.getHour(),
      time.getMinute()
    );
    this.awards = new ArrayList<>();
  }

  public GameResult toDomain() {
    List<Award> domainAwards = new ArrayList<>();

    awards.stream().map(awardDto -> domainAwards.add(awardDto.toDomain()));

    return new GameResult(
      null,
      gameDate,
      domainAwards
    );
  }
}
