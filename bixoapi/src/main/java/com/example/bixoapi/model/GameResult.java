package com.example.bixoapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Table(name = "gameresult_seq")
@Entity(name = "gameresult_seq")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class GameResult {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private LocalDateTime gameDate;

  @OneToMany(targetEntity = Award.class, mappedBy = "id")
  private List<Award> awards;
}
