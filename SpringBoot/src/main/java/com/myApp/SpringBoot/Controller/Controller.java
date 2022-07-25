
package com.myApp.SpringBoot.Controller;

import com.myApp.SpringBoot.Model.Persona;
import com.myApp.SpringBoot.Service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
   @Autowired
   PersonaService personaService;

    @GetMapping("/persona/{nombre}")
    public String saludar(@PathVariable String nombre) {
        return "Bienvenidos a Argentina Programa. Soy " + nombre;
    }
    
     @GetMapping("/persona")
    public String saludar2(@RequestParam String nombre, @RequestParam String apellido)
    {
     return "Bienvenidos a Argentina Programa. Soy " + nombre + " " + apellido;   
    }
    
    @PostMapping("/persona")
    public void crearPersona(@RequestBody Persona persona)
    {
        personaService.crearPersona(persona);
    }
    
    @DeleteMapping("/persona/{id}")
    public void borrarPersona(@PathVariable Long id)
    {
        personaService.borrarPersona(id);
    }
}
