export interface Profesores{
    id:number;
    Pusername: String;
    Ppassword: String;
    Pcorreo: String;
    role: String;
    nombre_asignatura: String;
    ano_asignatura: String;
    semestre_asignatura: String;
    horas_asignatura: String;
    isactive: boolean;
    
}
export interface Profesor{
    Pusername: String;
    Ppassword: String;
    Pcorreo: String;
    nombre_asignatura: String;
    ano_asignatura: String;
    semestre_asignatura: String;
    horas_asignatura: String;
    role: String;
    isactive: boolean;
}

export interface Estudiantes{
    id: String;
    Eusername: String;
    Epassword: String;
    Ecorreo: String;
    Erole: String;
    isactive: boolean;
}

export interface Estudiante{
    Eusername: String;
    Epassword: String;
    Ecorreo: String;
    Erole: String;
    isactive: boolean;
}

export interface Anime{
    nombre: String;
    temporada: String;
    fecha: Date;
}

export interface Dato{
    Asignatura: string;
    Pusername: string;
    fecha: string;
    hora: string;
}

export interface Datos{
    id: number;
    Asignatura: string;
    Pusername: string;
    fecha: string;
    hora: string;
}
