console.log("Hola mundo");
const nombre = "Santilin";
let apellido = "Flores";

console.log(nombre);
console.log(apellido);

//const nombre = "Calabazin";
 apellido = "Perez";

console.log(apellido);






//Objetos de JavaScript
const persona = {
    nombre : "Carlitos",
    apellidos : "Meeeeeh",
    edad : 20,
    apodo : [
        "Armando_casa",
        "Armando_paredes",
        "Aquiles_brinco"
    ]
};
console.log(persona);
persona.apellidos = "Flores Solano";
console.log(persona.apellidos);
console.log("========Fin Objetos=========");

//Funciones Java

const saludar = (nombre) => 
     "Hola " + nombre;





const saludo = saludar("Santiago");
console.log(saludo);
console.log("======Fin funciones======")



//Listas
const listNumeros = [
    77, 23, 11, 24, 34
];
console.log(listNumeros);
listNumeros[3] = 7;
console.log(listNumeros);


const numerosMultiplicados = listNumeros.map(
    numeroEnElQVoy => {
        return numeroEnElQVoy * 3;
    }
);
console.log(numerosMultiplicados);

const numerosEnObjetos = listNumeros.map(
    (numeroEnElQVoy) => {
        return {
            valor : numeroEnElQVoy
        };
    }
);
console.log(numerosEnObjetos);




