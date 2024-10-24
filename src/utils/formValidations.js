import { esEmailValido } from "./esEmailValido";

export const formValidations = {
  nombre: [(value) => value.length >= 5 && value !== '', 'Mínimo 5 caracteres'],
  email: [(value) => esEmailValido(value), 'El correo no es válido'],
  password:[(value) => value.length >= 5 && value !== '', 'Mínimo 5 caracteres'], 
  rol: [(value) => value.length > 0 , 'Al menos un rol para cada usuario'],
};