package com.gestion.absence.repository;

import com.gestion.absence.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository  extends JpaRepository<Student,Integer> {
}
