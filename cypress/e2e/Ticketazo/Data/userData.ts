

import { generateRandomDNI, generateRandomEmail } from "../Helpers";
import { UserData } from "../Interfaces/UserDataInterface";



const userData: UserData = {
  nombres: 'Juan Perez',
  apellido: 'Gomez',
  telefono: '1234567890',
  dni: generateRandomDNI(),
  provincia: 'Buenos Aires',
  localidad: 'La Plata',
  fechaNacimiento: { dd: '23', mm: '06', aaaa: '1998' },
  email: generateRandomEmail(),
  password: 'Password123!',
  wrongLengthPassword: 'Test',
  wrongFormatPassword: 'Test32!'
}


export { userData }