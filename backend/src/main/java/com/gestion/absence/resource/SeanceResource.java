package com.gestion.absence.resource;


import com.gestion.absence.model.Seance;
import com.gestion.absence.repository.SeanceRepository;
import com.gestion.absence.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping(value = "/api/seance")
@CrossOrigin(origins = "http://localhost:3001")

public class SeanceResource {

    @Autowired
    SeanceRepository seanceRepository;
    @Autowired
    StudentRepository studentRepository;
    @GetMapping(value = "/all")
    public List<Seance> getAll(){
        return seanceRepository.findAll();
    }

    @PostMapping
    public int addStudent(@RequestBody final Seance seance){

        seanceRepository.save(seance);
        return 1;
    }

    @PutMapping(value = "/update")
    public int update(@RequestBody final Seance seance){
        seanceRepository.save(seance);
        return 1;
    }

    @DeleteMapping(value = "/{id}")
    public int delete(@PathVariable int id){
        seanceRepository.deleteById(id);
        return 1;
    }

}
