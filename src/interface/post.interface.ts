//Interface

/**
 * El cargo que emplea un empleado o trabajador
 */
export interface Cargo{
    nombre:string
}

/**
 * registra cuando retiran, (aun se debe implementar)
 */
export interface Egreso{
    fecha:string
    decripcion: string
}

/**
 * Datos necesario para empleado
 */
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

/**
 * Los grupos que pertenecen cada medicamento
 */
export interface Grupo_terapeutico{
    nombre:string
}

/**
 * Datos que requiere para registrar un nuevo ingreso,
 * com el pempledo que lo hizo
 * la fecha y la hora
 */
export  interface Ingreso{
    empleadoid:number
    fecha: string 
    hora: string
}

/**
 * Datos que requiere laboratorio
 */
export interface Laboratorio{
    nombre:string
    correo:string
    telefono:string
    direccion:string
}

/**
 * Datos que requiere para los lotes
 */
export interface Lote{
    ingresoid: number
    fecha_vencimineto:string
    medicamentoid:number
    fecha_produccion:string
    laboratorioid: number
}

/**
 * Los datos que requiere para las descripciones del medicamento
 */
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

/**
     * El tipo de presentacion para el  medicamento
     */
    
export interface postPresentacion{
    
    tipo: undefined
}

/**
 * El que tipo de producto es el medicamento como : unyectable, compridos ..ect
 */
export interface Producto {
    nombre: string
}
