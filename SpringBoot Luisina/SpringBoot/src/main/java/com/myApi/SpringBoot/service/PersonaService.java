
package com.myApi.SpringBoot.service;

import com.myApi.SpringBoot.model.Persona;
import com.myApi.SpringBoot.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService{

    @Autowired
    public PersonaRepository PersoRepo;
    
    @Override
    public List<Persona> verPersonas() {
        return PersoRepo.findAll();
    }

    @Override
    public void crearPersona(Persona per) {
        PersoRepo.save(per);
    }

    @Override
    public void borrarPersona(Long id) {
        PersoRepo.deleteById(id);
    }

    @Override
    public Persona buscarPersona(Long id) {
        return PersoRepo.findById(id).orElse(null);
    }
    
}
