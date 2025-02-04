/**
 * MAYORES DE EDAD 
 * Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
 * reporte al final el porcentaje de personas que son mayores de edad. 
 * Se tienen las siguientes personas: 
 * Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
 * José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); 
 * la salida requerida presenta el siguiente formato: 
 * Cantidad de personas: 12 
 * Cantidad de personas mayor de edad: 7 
 * Porcentaje de personas mayor de edad: 58.33% 
 */

import Cl_persona from "./Cl_persona.js";
import Cl_mayorE from "./Cl_mayorE.js";

let persona1 = new Cl_persona("Luis", 15);
let persona2 = new Cl_persona("Ana", 19);
let persona3 = new Cl_persona("Jose", 21);
let persona4 = new Cl_persona("Carmen", 17);
let persona5 = new Cl_persona("Rosa", 18);
let persona6 = new Cl_persona("Jose", 22);
let persona7 = new Cl_persona("Maria", 17);
let persona8 = new Cl_persona("Luz", 19);
let persona9 = new Cl_persona("Rafael", 23);
let persona10 = new Cl_persona("Liz", 15);
let persona11 = new Cl_persona("Marcos", 20);
let persona12 = new Cl_persona("Leo", 16);

let mayorE = new Cl_mayorE();

mayorE.procesarPersona(persona1);
mayorE.procesarPersona(persona2);
mayorE.procesarPersona(persona3);
mayorE.procesarPersona(persona4);
mayorE.procesarPersona(persona5);
mayorE.procesarPersona(persona6);
mayorE.procesarPersona(persona7);
mayorE.procesarPersona(persona8);
mayorE.procesarPersona(persona9);
mayorE.procesarPersona(persona10);
mayorE.procesarPersona(persona11);
mayorE.procesarPersona(persona12);

alert(`cantidad de personas: ${mayorE.cantidadPersonas()}`);
alert(`cantidad de personas mayores de edad: ${mayorE.cantidadPersonasMayoresE()}`);
alert(`porcentaje de personas mayores de edad: ${mayorE.porcentajemayoresE()}%`);