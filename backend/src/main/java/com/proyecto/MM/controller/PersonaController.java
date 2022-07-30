
package com.proyecto.MM.controller;

import com.proyecto.MM.Interface.IPersonaService;
import com.proyecto.MM.entity.persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaController {
    @Autowired IPersonaService ipersonaService;
    
    @GetMapping("personas/traer")
    public List<persona> getPersona(){
       return ipersonaService.getPersona();
    }
    @PostMapping("personas/crear)")
    public String createPersona(@RequestBody persona persona){
        ipersonaService.savePersona(persona);
        return "la persona fue creada correctamente";
}
    @DeleteMapping("personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        ipersonaService.deletePersona(id);
        return "la persona fue eliminada correctamente";
    }
    // URL:PUERTO/personas/editar/4/nombre&apellido&img
    @PutMapping("personas/editar/{id}")
    public persona editPersona(@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("apellido") String nuevoApellido,        
                                @RequestParam("img") String nuevoImg){
    persona persona = ipersonaService.findPersona(id);
    persona.setNombre(nuevoNombre);
    persona.setApellido(nuevoApellido);
    persona.setImg(nuevoImg);
    
    ipersonaService.savePersona(persona);
    return persona;
}
}        
