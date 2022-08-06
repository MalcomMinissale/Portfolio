/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyecto.MM.Dto;
 
import javax.validation.constraints.NotBlank;


public class dtoOtrosProyectos {
    @NotBlank
    private String proyecto;
    @NotBlank
    private String descripcion;

    public dtoOtrosProyectos(String proyecto, String descripcion) {
      
      
        this.proyecto = proyecto;
        this.descripcion = descripcion;
    }

    public dtoOtrosProyectos() {
    }


    public String getProyecto() {
        return proyecto;
    }

    public void setProyecto(String proyecto) {
        this.proyecto = proyecto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
