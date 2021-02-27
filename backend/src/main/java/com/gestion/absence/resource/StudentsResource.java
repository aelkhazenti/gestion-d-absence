package com.gestion.absence.resource;

import com.gestion.absence.model.Student;
import com.gestion.absence.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/students")
@CrossOrigin(origins = "http://localhost:3001")

public class StudentsResource {

        @Autowired
        StudentRepository studentRepository;

        @GetMapping(value = "/all")
        public List<Student> getAll(){
            return studentRepository.findAll();
        }

        @PostMapping
        public int addStudent(@RequestBody final Student student){
            studentRepository.save(student);
            return 1;
        }

        @PutMapping(value = "/update")
        public int update(@RequestBody final Student student){
            studentRepository.save(student);
            return 1;
        }

        @DeleteMapping(value = "/{id}")
        public int delete(@PathVariable int id){
            studentRepository.deleteById(id);
            return 1;
        }
    }
