import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";
import { CotizadorContextType } from "../types";

const useCotizador = () => {
    return useContext(CotizadorContext) as CotizadorContextType
}

export default useCotizador