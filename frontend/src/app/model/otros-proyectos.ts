export class OtrosProyectos {
    id: number;
    proyecto: string;
    descripcion: string;

    constructor(id: number, proyecto: string, descripcion: string){
        this.id = id;
        this.proyecto = proyecto;
        this.descripcion = descripcion;
    }
}