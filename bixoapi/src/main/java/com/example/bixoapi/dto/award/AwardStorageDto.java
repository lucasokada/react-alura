package com.example.bixoapi.dto.award;

import com.example.bixoapi.model.Award;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class AwardStorageDto {
  @NotBlank
  @Min(1)
  @Max(7)
  public Integer awardNumber;

  @NotBlank
  public String result;

  public Award toDomain() {
    return new Award(
      null,
      awardNumber,
      result
    );
  }
}
