"use strict";
var saludo = "Bienvenidos a Argentina Programa";
console.log(saludo);
function cambiarAcercaDe() {
    let acercaDeInput = prompt("Ingrese el nuevo valor de AcercaDe");
    document.getElementById("acercaDe").innerHTML = acercaDeInput;
}
/*var persona={fullName:"Malcom Minissale",
 position:"Desarrollador Web Full Stack", ubication:"Buenos Aires, Argentina"};*/
class Persona {
    constructor(name, position, ubication) {
        this.fullName = name;
        this.position = position;
        this.ubication = ubication;
    }
    saludar() {
        console.log("Bienvenido " + this.fullName);
    }
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
}
var persona = new Persona("Malcom Minissale", "Desarrollador Web Full Stack", "Buenos Aires, Argentina");
document.getElementById("nombre").innerHTML = persona.FullName;
document.getElementById("perfil").innerHTML = persona.position;
document.getElementById("residencia").innerHTML = persona.ubication;
