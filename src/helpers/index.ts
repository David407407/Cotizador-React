export function obtenerDiferenciaYear(year: string) {
    return new Date().getFullYear() - Number(year)
}