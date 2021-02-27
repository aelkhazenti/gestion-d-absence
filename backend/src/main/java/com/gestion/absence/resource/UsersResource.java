package com.gestion.absence.resource;


import com.gestion.absence.model.Student;
import com.gestion.absence.model.Users;
import com.gestion.absence.repository.StudentRepository;
import com.gestion.absence.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
@CrossOrigin(origins = "http://localhost:3000")

public class UsersResource {
    @Autowired
    UsersRepository usersRepository;

    @GetMapping(value = "/all")
    public List<Users> getAll(){
        return usersRepository.findAll();
    }

    @PostMapping
    public int addStudent(@RequestBody final Users users){
        usersRepository.save(users);
        return 1;
    }

    @PutMapping(value = "/update")
    public int update(@RequestBody final Users users){
        usersRepository.save(users);
        return 1;
    }

    @DeleteMapping(value = "/{id}")
    public int delete(@PathVariable int id){
        usersRepository.deleteById(id);
        return 1;
    }

}
