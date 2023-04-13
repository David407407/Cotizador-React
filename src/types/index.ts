export type ModalContextType = {
    modal: boolean,
    setModal: (value: boolean) => void
}
export type Modal = true | false
    
export type Evento = {
    preventDefault: () => any,
    target: { value: string | number; name: string | number; }
}
export type CotizadorContextType = {
    datos: {
        marca: string,
        year: string,
        plan: string
    },
    handleChangeDatos: (e: Evento) => void,
    error: string,
    setError: (dato: string) => void,
    cotizarSeguro: () => void,
    resultado: number,
    loading: boolean
}