import exp from "constants"

export interface Cargo{
    nombre:string
}

export interface Egreso{
    fecha:string
    decripcion: string
}

export interface Empleado {
    cargoid: undefined
    ci: string
    nombrec:string
    apellidop:string
    apellidom:string
    correo:string
    telefono:string
    usuario:string
    contrasenha:string
}

export interface Grupo_terapeutico{
    nombre:string
}

export  interface Ingreso{
    empleadoid:number
    fecha: string 
    hora: string
}

export interface Laboratorio{
    nombre:string
    correo:string
    telefono:string
    direccion:string
}
export interface Lote{
    ingresoid: number
    fecha_vencimineto:string
    medicamentoid:number
    fecha_produccion:string
    laboratorioid: number
}

export interface Medicamento{
    composicion:string
    grupo_terapeiticoid:number
    dosificacion:string
    indicacion:string
    contradicion:string
    nombre_medicamento: string
    presentacionid: number
    productoid:number

}

export interface postPresentacion{
    tipo: undefined
}

export interface Producto {
    nombre:string
}
