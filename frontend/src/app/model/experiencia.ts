export class Experiencia {
    id : number;
    nombreExp : string;
    descripcionExp : string;
    logoExp: string;
     
    constructor(id: number, nombreExp: string, descripcionExp : string, logoExp : string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.id = id;
        this.logoExp = logoExp;


    }
}
