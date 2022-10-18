export interface Cargo{
    nombre:string
}

export interface Egreso{
    fecha:string | number 
    decripcion: string
}

export interface Empleado {
    cargoid: number
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
    fecha: string | number | undefined
    hora: string
}

export interface Laboratorio{
    nombre:string
    correo:string
    telefono:string
    direccion:string
}
export interface Lote{
    fecha_vencimineto:string
    fecha_produccion:string
    ingresoid: number
    laboratorioid: number
    medicamentoid:number
    
}

export interface Medicamento{
    nombre_producto:string
    producto:string
    composicion:string
    grupo_terapeiticoid:number
    dosificacion:string
    indicacion:string
    contradicion:string
    presentacionid:number
}

export interface Presentacion{
    tipo:string
}

