import React, { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, AÑOS, PLANES } from "../constants"
import Error from "./Error"
type Props = {}


const Formulario = (props: Props) => {
  const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios');
      return
    }
    setError('')
    // Cotizar
    cotizarSeguro()
  }

  return (
    <>  
        {
          error && <Error/>
        }
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}
        >
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select 
                  name="marca" 
                  className="w-full bg-white border border-gray-200"
                  onChange={ e => handleChangeDatos(e)}
                  value={datos.marca}
                >
                    <option value="">-- Selecciona Marca --</option>
                    {
                      MARCAS.map( marca => (
                        <option value={marca.id} key={marca.id}>{marca.nombre}</option>
                      ))
                    }
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                <select 
                  name="year" 
                  className="w-full bg-white border border-gray-200"
                  onChange={ e => handleChangeDatos(e)}
                  value={datos.year}
                >
                    <option value="">-- Selecciona Año --</option>
                    {
                      AÑOS.map( año => (
                        <option value={año} key={año}>{año}</option>
                      ))
                    }
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Elige Un Plan</label>
                <div className="flex gap-3 items-center">
                    {
                      PLANES.map( plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input 
                              type="radio" 
                              name="plan"
                              value={plan.id}
                              onChange={ e => handleChangeDatos(e)}
                            />
                        </Fragment>
                      ))
                    }
                </div>
            </div>

            <input 
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 text-white cursor-pointer p-3 uppercase font-bold"
              value='Cotizar' 
            />
        </form>
    </>
  )
}

export default Formulario