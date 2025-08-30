


export interface UserData {
  nombres: string
  apellido: string
  telefono: string
  dni: string
  provincia: string
  localidad: string
  fechaNacimiento: { dd: string; mm: string; aaaa: string }
  email: string
  password: string
  wrongLengthPassword: string
  wrongFormatPassword: string
}