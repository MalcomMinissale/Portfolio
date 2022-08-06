export class Proyectos {
    id: number;
    img: string;
    proyecto: string;
    descripcion: string;

    constructor(id: number, img: string, proyecto: string, descripcion: string){
        this.id = id;
        this.img = img
        this.proyecto = proyecto;
        this.descripcion = descripcion;
    }
}