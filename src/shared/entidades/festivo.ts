import { Tipo } from "./Tipo";

export interface Festivo {
    id: number,
    nombre: string,
    dia : number,
    mes : number,
    tipo : Tipo
}