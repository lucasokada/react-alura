package com.example.bixoapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Table(name = "award")
@Entity(name = "award")
@AllArgsConstructor
@NoArgsConstructor
public class Award {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private Integer awardNumber;
  private String result;

  public Long getId() {
    return id;
  }

  public Integer getAwardNumber() {
    return awardNumber;
  }

  public String getResult() {
    return result;
  }
}
