
package com.myApi.SpringBoot.Controller;

import com.myApi.SpringBoot.model.Persona;
import com.myApi.SpringBoot.service.IPersonaService;
import com.myApi.SpringBoot.service.PersonaService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    /* List<Persona> listaPersonas = new ArrayList();
    
    @GetMapping ("/hola/{nombre}/{apellido}/{edad}")
    public String decirHola(@PathVariable String nombre, @PathVariable String apellido, @PathVariable int edad) {
        return "Hola Mundo " + nombre + " " + apellido + "edad: " + edad;
    }
    
    @GetMapping ("/chau")
    public String decirChau(@RequestParam String nombre, @RequestParam String apellido, @RequestParam int edad) {
        return "Chau Mundo " + nombre + " " + apellido + " edad: " + edad;
    }
    */
    @Autowired
    private IPersonaService PersoServ;
    
    @PostMapping ("/new/persona")
    public void agregarPersona(@RequestBody Persona pers) {
       PersoServ.crearPersona(pers);
        // listaPersonas.add(pers);
    }
    
    @GetMapping("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas() {
       return PersoServ.verPersonas();
        // return listaPersonas;
    }
    
    @DeleteMapping ("/delete/{id}")
    public void borrarPersona(@PathVariable Long id) {
        PersoServ.borrarPersona(id);
        
    }
            
}
 