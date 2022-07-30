
package com.proyecto.MM.Interface;

import com.proyecto.MM.entity.persona;
import java.util.List;
        


public interface IPersonaService {
    // traer una lista de personas
    public List<persona> getPersona();
    
    // guardar un objeto de tipo Persona
    public void savePersona(persona persona);
    
    // eliminar un objeto buscandolo por ID
    public void deletePersona(Long id);
    
    // buscar una persona por ID
    public persona findPersona(Long id);
    
}
