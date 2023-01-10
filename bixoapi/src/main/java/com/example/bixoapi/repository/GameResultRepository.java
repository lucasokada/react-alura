package com.example.bixoapi.repository;

import com.example.bixoapi.dto.gameresult.GameResultStorageDto;
import com.example.bixoapi.model.GameResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;

import java.util.Optional;

public interface GameResultRepository extends JpaRepository<GameResult, Long> {

}
