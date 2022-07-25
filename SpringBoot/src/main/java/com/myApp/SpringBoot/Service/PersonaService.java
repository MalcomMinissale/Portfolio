
package com.myApp.SpringBoot.Service;

import com.myApp.SpringBoot.Model.Persona;
import com.myApp.SpringBoot.Repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
    
    @Autowired
    PersonaRepository personaRepo;
    
    public void crearPersona(Persona persona)
    {
        personaRepo.save(persona);
    }
    public void borrarPersona(Long id)
    {
        personaRepo.deleteById(id);
    }
    
    public List<Persona> listarPersonas()
    {
       return personaRepo.findAll();
    }
}
