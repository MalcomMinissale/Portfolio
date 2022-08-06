/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyecto.MM.Controller;

import com.proyecto.MM.Entity.Proyectos;
import com.proyecto.MM.Service.ServProyectos;
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
public class ProyectosController {
    
@Autowired
ServProyectos servProyectos;
  
@GetMapping("/proyectos/mostrar")
@ResponseBody
public List<Proyectos> listProyectos(){
    
    return servProyectos.listProyectos();
}

@PostMapping("/proyectos/crear")
public void createProyecto(@RequestBody Proyectos proyecto){
  servProyectos.createProyecto(proyecto);
}

@PutMapping("/proyectos/editar/{id}")
public Proyectos editProyecto(@RequestBody Proyectos proyecto, @PathVariable Long id){
    
    Proyectos pro = servProyectos.findProyecto(id);

    pro.setImg(proyecto.getImg());
    pro.setProyecto(proyecto.getProyecto());
    pro.setDescripcion(proyecto.getDescripcion());
   
   servProyectos.createProyecto(pro);
   return pro;
}

@DeleteMapping("/proyectos/{id}")
public void deleteProyecto(@PathVariable Long id){
    servProyectos.deleteProyecto(id);
}
}
