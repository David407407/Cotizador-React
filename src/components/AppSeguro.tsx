import { useState } from "react"
import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"

function AppSeguro() {
  const { resultado, loading } = useCotizador()
  return (
    <>
        <header className="mt-10">
            <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mt-10">
            <Formulario />

            {
              loading ? (
                <Spinner />
              )
              : resultado > 0 && <Resultado />
            }
        </main>
    </>
  )
}

export default AppSeguro