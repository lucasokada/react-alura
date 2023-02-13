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
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GameResultStorageDto {
  @NotBlank
  public LocalDateTime gameDate;
  @NotBlank
  public List<AwardStorageDto> awards;

  private LocalTime getGameResultHour(int dateIndicator) {
    return switch (dateIndicator) {
      case 1 -> LocalTime.of(11, 0);
      case 2 -> LocalTime.of(14, 0);
      case 3 -> LocalTime.of(16, 0);
      case 4 -> LocalTime.of(18, 0);
      case 5 -> LocalTime.of(21, 0);
      default -> LocalTime.now();
    };
  }

  public String getId() {
    return UUID.nameUUIDFromBytes(this.gameDate.toString().getBytes()).toString();
  }

  public GameResultStorageDto(int dateIndicator, LocalDate gameDate) {
    LocalTime time = getGameResultHour(dateIndicator);

    this.gameDate = LocalDateTime.of(
      gameDate.getYear(),
      gameDate.getMonth(),
      gameDate.getDayOfMonth(),
      time.getHour(),
      time.getMinute()
    );
    this.awards = new ArrayList<>();
  }

  public GameResult toDomain() {
    List<Award> domainAwards = new ArrayList<>();

    awards.forEach(awardDto -> domainAwards.add(awardDto.toDomain()));

    return new GameResult(
      gameDate,
      domainAwards
    );
  }
}
