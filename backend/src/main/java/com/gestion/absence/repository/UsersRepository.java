package com.gestion.absence.repository;

import com.gestion.absence.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository  extends JpaRepository<Users,Integer> {


}
