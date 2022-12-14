/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 13.5 		*/
/*  Created On : 21-oct.-2022 13:57:40 				*/
/*  DBMS       : PostgreSQL 						*/
/* ---------------------------------------------------- */

/* Drop Sequences for Autonumber Columns */



/* Drop Tables */

DROP TABLE IF EXISTS Cargo CASCADE
;

DROP TABLE IF EXISTS Egreso CASCADE
;

DROP TABLE IF EXISTS Empleado CASCADE
;

DROP TABLE IF EXISTS Grupo_terapeitico CASCADE
;

DROP TABLE IF EXISTS Ingreso CASCADE
;

DROP TABLE IF EXISTS Laboratorio CASCADE
;

DROP TABLE IF EXISTS Lote CASCADE
;

DROP TABLE IF EXISTS Medicamento CASCADE
;

DROP TABLE IF EXISTS Presentacion CASCADE
;

DROP TABLE IF EXISTS Producto CASCADE
;

/* Create Tables */

CREATE TABLE Cargo
(
	CargoID serial NOT NULL,
	Nombre varchar(50)     -- nombre como Jefe, Empleado, Administrador etc
)
;

CREATE TABLE Egreso
(
	EgresoID serial NOT NULL,
	Fecha date ,
	Descripcion varchar(100)
)
;

CREATE TABLE Empleado
(
	EmpleadoID serial NOT NULL,
	CargoID serial ,
	CI varchar(50) ,
	NombreC varchar(50),
	ApellidoP varchar(50) ,
	ApelledoM varchar(50),
	Correo varchar(50) ,
	Telefono varchar(50),
	Usuario varchar(50) ,
	Contrasenha varchar(100) 
)
;

CREATE TABLE Grupo_terapeitico
(
	Grupo_terapeiticoID serial NOT NULL,
	Nombre varchar(50)     -- como idicaca los grupos terapeutico,  infamatorio , quimioterapios etc
)
;

CREATE TABLE Ingreso
(
	IngresoID serial NOT NULL,
	EmpleadoID serial ,
	Fecha date,
	Hora varchar(50) 
)
;

CREATE TABLE Laboratorio
(
	LaboratorioID serial NOT NULL,
	Nombre varchar(50) ,
	Correo varchar(50) ,
	Telefono varchar(50) ,
	Direccion varchar(100) 
)
;

CREATE TABLE Lote
(
	LoteID serial NOT NULL,
	IngresoID serial ,
	Fecha_Vencimiento varchar(50) ,
	MedicamentoID serial ,
	Fecha_Produccion varchar(50),
	LaboratorioID serial 
)
;

CREATE TABLE Medicamento
(
	MedicamentoID serial NOT NULL,
	Composicion varchar(50) ,    -- que contienes, y cantidad
	Grupo_terapeiticoID serial ,
	Dosificacion varchar(50) ,    -- Como debe aplicarse o su uso
	Indicacion varchar(50) ,
	Contradicion varchar(50) ,    -- indicaciones de no usar en caso de...
	Nombre_medicamento varchar(50) ,    -- Como es obio 
	PresentacionID serial ,
	ProductoID serial 
)
;

CREATE TABLE Presentacion
(
	PresentacionID serial NOT NULL,
	tipo varchar(50)    -- Aqui registraremos que tipo de producto de medicamento es, como pomada,gelm inyectable, etc
)
;

CREATE TABLE Producto
(
	ProductoID serial NOT NULL,
	nombre varchar(50) 
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE Cargo ADD CONSTRAINT PK_Cargo
	PRIMARY KEY (CargoID)
;

ALTER TABLE Egreso ADD CONSTRAINT PK_Egreso
	PRIMARY KEY (EgresoID)
;

ALTER TABLE Empleado ADD CONSTRAINT PK_Empleado
	PRIMARY KEY (EmpleadoID)
;

ALTER TABLE Grupo_terapeitico ADD CONSTRAINT PK_Grupo_terapeitico
	PRIMARY KEY (Grupo_terapeiticoID)
;

ALTER TABLE Ingreso ADD CONSTRAINT PK_Ingreso
	PRIMARY KEY (IngresoID)
;

ALTER TABLE Laboratorio ADD CONSTRAINT PK_Laboratorio
	PRIMARY KEY (LaboratorioID)
;

ALTER TABLE Lote ADD CONSTRAINT PK_Lote
	PRIMARY KEY (LoteID)
;

ALTER TABLE Medicamento ADD CONSTRAINT PK_Medicamento
	PRIMARY KEY (MedicamentoID)
;

CREATE INDEX IXFK_Medicamento_Producto ON Medicamento (ProductoID ASC)
;

ALTER TABLE Presentacion ADD CONSTRAINT PK_Presentacion
	PRIMARY KEY (PresentacionID)
;

ALTER TABLE Producto ADD CONSTRAINT PK_Producto
	PRIMARY KEY (ProductoID)
;

/* Create Foreign Key Constraints */

ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Cargo
	FOREIGN KEY (CargoID) REFERENCES Cargo (CargoID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Ingreso ADD CONSTRAINT FK_Ingreso_Empleado
	FOREIGN KEY (EmpleadoID) REFERENCES Empleado (EmpleadoID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Lote ADD CONSTRAINT FK_Lote_Laboratorio
	FOREIGN KEY (LaboratorioID) REFERENCES Laboratorio (LaboratorioID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Lote ADD CONSTRAINT FK_Lote_Ingreso
	FOREIGN KEY (IngresoID) REFERENCES Ingreso (IngresoID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Lote ADD CONSTRAINT FK_Lote_Medicamento
	FOREIGN KEY (MedicamentoID) REFERENCES Medicamento (MedicamentoID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Medicamento ADD CONSTRAINT FK_Medicamento_Presentacion
	FOREIGN KEY (PresentacionID) REFERENCES Presentacion (PresentacionID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Medicamento ADD CONSTRAINT FK_Medicamento_Producto
	FOREIGN KEY (ProductoID) REFERENCES Producto (ProductoID) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE Medicamento ADD CONSTRAINT FK_Medicamento_Grupo_terapeitico
	FOREIGN KEY (Grupo_terapeiticoID) REFERENCES Grupo_terapeitico (Grupo_terapeiticoID) ON DELETE No Action ON UPDATE No Action
;

/* Create Table Comments, Sequences for Autonumber Columns */

COMMENT ON COLUMN Cargo.Nombre
	IS 'nombre como Jefe, Empleado, Administrador etc'
;

 

 

COMMENT ON COLUMN Grupo_terapeitico.Nombre
	IS 'como idicaca los grupos terapeutico,  infamatorio , quimioterapios etc'
;

 

COMMENT ON COLUMN Medicamento.Composicion
	IS 'que contienes, y cantidad'
;

COMMENT ON COLUMN Medicamento.Dosificacion
	IS 'Como debe aplicarse o su uso'
;

COMMENT ON COLUMN Medicamento.Contradicion
	IS 'indicaciones de no usar en caso de...'
;

COMMENT ON COLUMN Medicamento.Nombre_medicamento
	IS 'Como es obio '
;

 

COMMENT ON COLUMN Presentacion.tipo
	IS 'Aqui registraremos que tipo de producto de medicamento es, como pomada,gelm inyectable, etc'
;

