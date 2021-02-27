package com.gestion.absence.repository;

import com.gestion.absence.model.Seance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeanceRepository extends JpaRepository<Seance,Integer> {

}
