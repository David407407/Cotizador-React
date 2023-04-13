import { useCallback, useRef, useMemo } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

type Props = {}

const Resultado = (props: Props) => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)
    // const memorizarMarca = useCallback( 
    //     () => MARCAS.filter( (m) => m.id === Number(marca)),
    // [resultado]);
    // useMemo guarda un valor, useCallback guarda una función
    const [nombreMarca] = useMemo(
        () => MARCAS.filter( (m) => m.id === Number(marca)), 
    [resultado])
    const memorizarPlan = useCallback(
        () => PLANES.filter( (p) => p.id === Number(plan)),
    [resultado])
    const [nombrePlan] = memorizarPlan()
  
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
        <p className="my-2 font-semibold"><span className="font-bold">Marca: </span>{nombreMarca.nombre}</p>
        <p className="my-2 font-semibold"><span className="font-bold">Plan: </span>{nombrePlan.nombre}</p>
        <p className="my-2 font-semibold"><span className="font-bold">Año del Auto: </span>{yearRef.current}</p>
        <p className="my-2 text-2xl font-semibold">
            <span className="font-bold">Total Cotización: </span>
            {resultado.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}
        </p>
    </div>
  )
}

export default Resultado