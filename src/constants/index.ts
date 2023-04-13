
type Planes = {
    id: number,
    nombre: string
}
export const  MARCAS: {id: number, nombre: string}[] = [
    {
        id: 1,
        nombre: 'Europeo'
    },
    {
        id: 2,
        nombre: 'Americano'
    },
    {
        id: 3,
        nombre: 'Asiatico'
    }
]

const YEARMAX: number = new Date().getFullYear()
export const AÑOS: number[] = Array.from(new Array(20), (valor, indice) => YEARMAX - indice)

export const PLANES: Planes[] = [
    { id: 1, nombre: 'Básico'},
    { id: 2, nombre: 'Completo'}
]