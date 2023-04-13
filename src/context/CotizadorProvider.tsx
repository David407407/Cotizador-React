import { ReactNode, createContext, useState } from "react";
import { Evento } from "../types";
import { obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext({})
interface Props {
    children: ReactNode
}

const CotizadorProvider = ({children}: Props) => {
    // const [modal, setModal] = useState<Modal>(false)
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeDatos = (e: Evento) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value,
        })
    }

    const cotizarSeguro = () => {
        // Una base
        let resultado: number = 2000
        // Obtener la diferencia de años
        const diferenciaYear: number = obtenerDiferenciaYear(datos.year)
        // Hay que restar un 3% por cada año
        resultado -= ((diferenciaYear * 3)*resultado)/100
        // Americano 15% // Europeo 30% // Asiatico 5%
        datos.marca === '2' ? resultado += resultado*.15 : datos.marca === '1' ? resultado += resultado*.30 : resultado += resultado*.05
        // Básico 20% // Completo 50%
        datos.plan === '1' ? resultado += resultado*.20 : resultado += resultado*.50
        resultado = Number(resultado.toFixed(2))   
        // const cotizacionTotal = resultado.toLocaleString('es-mx', {style: 'currency', currency: 'MX'})
        setLoading(true)
        setTimeout(() => {
            setResultado(resultado)        
            setLoading(false)
        }, 3000);
    }

    return (
        <CotizadorContext.Provider value={{ datos, handleChangeDatos, error, setError, cotizarSeguro, resultado, loading }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext