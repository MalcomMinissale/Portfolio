/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyecto.MM.Dto;

import javax.persistence.Basic;

import javax.validation.constraints.NotBlank;


public class dtoProyectos {
  
    @Basic
    private String img;
    @NotBlank
    private String proyecto;
    @NotBlank
    private String descripcion;

    public dtoProyectos(String img, String proyecto, String descripcion) {
      
        this.img = img;
        this.proyecto = proyecto;
        this.descripcion = descripcion;
    }

    public dtoProyectos() {
    }


    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
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
