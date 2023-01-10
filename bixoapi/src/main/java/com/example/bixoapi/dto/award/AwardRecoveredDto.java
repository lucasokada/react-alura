package com.example.bixoapi.dto.award;

import com.example.bixoapi.model.Award;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AwardRecoveredDto {
  @NotBlank
  public Long id;

  @NotBlank
  @Min(1)
  @Max(5)
  public Integer awardNumber;

  @NotBlank
  public String result;

  public AwardRecoveredDto(Award award) {
    this.id = award.getId();
    this.awardNumber = award.getAwardNumber();
    this.result = award.getResult();
  }
}
