import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { MiPortfolioService } from 'src/app/servicios/mi-portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true;// debería estar en false al principio
  form:FormGroup;
  constructor(private miServicio:MiPortfolioService,private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      fullName:['',[Validators.required, Validators.minLength(5)]],
      position:['',[Validators.required]],
      ubication:['',[Validators.required]],
      url:['https://',[Validators.required]],
      backImage:['https://',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

  guardarEncabezado(){
    if(this.form.valid) {

      let fullName= this.form.get("fullName")?.value;
      let position= this.form.get("position")?.value;
      let ubication= this.form.get("ubication")?.value;
      let url= this.form.get("url")?.value; 
      let backImage= this.form.get("backImage")?.value; 
        
      let personaEditar= new Persona(fullName,position,ubication,url,backImage);
      this.miServicio.editarDatosPersona(personaEditar).subscribe({ 
        next: (data) => {
          this.persona=personaEditar;
          this.form.reset();
          document.getElementById("cerrarModalEncabezado")?.click();
          
        },
        error: (error) => {
          alert("Ups, no se pudo actualizar el registro. Por favor, intente nuevamente y/o contacte al administrador.");
        },
      })
    }
    else
    {
      this.form.markAllAsTouched();
    }
  }

  get fullName(){
    return this.form.get('fullName');
    this.form.markAllAsTouched();
  }


mostrarDatosEncabezado(){
  this.form.get("fullName")?.setValue(this.persona.fullName);
  this.form.get("position")?.setValue(this.persona.position);
  this.form.get("ubication")?.setValue(this.persona.ubication);
  this.form.get("url")?.setValue(this.persona.image);
  this.form.get("backImage")?.setValue(this.persona.backImage);
}
}