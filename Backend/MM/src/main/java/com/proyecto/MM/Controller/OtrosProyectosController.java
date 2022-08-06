/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyecto.MM.Controller;


import com.proyecto.MM.Entity.OtrosProyectos;
import com.proyecto.MM.Service.ServOtrosProyectos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OtrosProyectosController {
    
@Autowired
ServOtrosProyectos servOtrosProyectos;
  
@GetMapping("/otros-proyectos/mostrar")
@ResponseBody
public List<OtrosProyectos> listOtrosProyectos(){
    
    return servOtrosProyectos.listOtrosProyectos();
}

@PostMapping("/otros-proyectos/crear")
public void createOtroProyecto(@RequestBody OtrosProyectos otroProyecto){
  servOtrosProyectos.createOtroProyecto(otroProyecto);
}

@PutMapping("/otros-proyectos/editar/{id}")
public OtrosProyectos editOtroProyecto(@RequestBody OtrosProyectos otroProyecto, @PathVariable Long id){
    
    OtrosProyectos otroPro = servOtrosProyectos.findOtroProyecto(id);

    
    otroPro.setProyecto(otroProyecto.getProyecto());
    otroPro.setDescripcion(otroProyecto.getDescripcion());
   
   servOtrosProyectos.createOtroProyecto(otroPro);
   return otroPro;
}

@DeleteMapping("/otros-proyectos/{id}")
public void deleteOtroProyecto(@PathVariable Long id){
    servOtrosProyectos.deleteOtroProyecto(id);
}
}
