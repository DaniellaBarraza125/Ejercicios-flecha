// FUNCIONES FLECHA//

const saludar = a =>  "hola";
;
console.log("funcion saludar=", saludar());
const division = (a,b)=> a/b;
console.log("funcion división en una linea=", division(10,2));
const miNombre = nombre => `Mi nombre es ${nombre}`

console.log("funcion flecha + template literal=", miNombre("Dani"));

const test2 = () => {
    return "Función test 2 ejecutada."
}
console.log(test2());


const test1 = (test2) => { 
    return test2();

};

// 2 FOREACH
let gente = [
        {
        nombre: "Jamiro",
        edad: 45,
        },
        {
        nombre: "Juan",
        edad: 35,
        },
        {
        nombre: "Paco",
        edad: 34,
        },
        {
        nombre: "Pepe",
        edad: 14,
        },
        {
        nombre: "Pilar",
        edad: 24,
        },
        {
        nombre: "Laura",
        edad: 24,
        },
        {
        nombre: "Jenny",
        edad: 10,
        },
    ];

let oldPeople = [];

gente.forEach(persona => {
    if (persona.edad > 25) {
        oldPeople.push(persona);
    }
});

console.log("gente mayor que 25=", oldPeople);

let comienzanJ= [];
gente.forEach(personas => {
    if (personas.nombre[0] == "J") {
        comienzanJ.push(personas);
    }
});
console.log("comienzan con J=",comienzanJ);
const mayores251 = gente.filter((personaMayor) => personaMayor.edad > 25);

console.log("mayores con filter=", mayores251);

const mayores25 = gente.map ((personaMayor) => {
    if (personaMayor.edad > 25)
{
    return personaMayor;
}})
console.log("mayores con map=",mayores25);

// para eliminar los undefined tendría que crear un array vacio y hacer push

const letraJ = gente.map((nombreJ)=> {
    // console.log(nombreJ.nombre[0]); 
    if (nombreJ.nombre[0] == "J"){
        return nombreJ
    }
})
console.log("primera letra con Map=", letraJ);

// 4. Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numbers.filter((impar => impar%2 !==0))
console.log("impares con fiter", impares);

const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
    ];


const happyV = foodList.filter((Veggie => Veggie.isVeggie == true))

    console.log('Que rico ', happyV[0].name,  'me voy a comer!', 'Que rica ', happyV[1].name, 'burguer me voy a comer!'
);

// 5. Reduce

const numeros = [39, 2, 4, 25, 62];

const multi = numeros.reduce((a,b)=> {
    return a*b;
})
console.log("reduce multiplicación=", multi);


// // Extras// Map

const staff = [
{
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
},
{ name: "Ana",
role: "becaria",
hobbies: ["nadar", "bailar"],
},
{
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
},
{
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
},
];

const frases = staff.map((frase)=>{
    return `${frase.name} es ${frase.role} y le gusta ${frase.hobbies[0]}y ${frase.hobbies}`;
})

console.log("frases = ", frases);

const paises = ["Italia", "Japón", "Valencia"]
const foodList1 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const megustaComer = foodList1.map((comida, index)=> {
    if (index < paises.length){
        return `Como soy de ${paises[index]} amo comer ${comida}`
    }
    else {
        return `Aunque no como carne, el ${comida} es sabroso`
    }
});
console.log("frases con map=", megustaComer);

// Filter
const inventory = [
        {
        name: 'Mobile phone',
        price: 199
        },
        {
        name: 'TV Samsung',
        price: 459
        },
        {
            name: 'Viaje a cancún',
            price: 600
        },
        {
            name: 'Mascarilla',
            price: 1
        }
        ];

        const costoso = inventory.filter(producto => producto.price > 300);

        const nombresProductos = costoso.map(producto => producto.name);
        console.log(costoso);
        console.log("filter + map=", nombresProductos);
    
        // Reduce
        const sentenceElements = [
            'Me',
            'llamo',
            'Dani',
            'y',
            'quiero',
            'sentir',
            'la',
            'fuerza',
            'con',
            'javascript'
            ];
const meLlamo = sentenceElements.reduce((a ,b)=>{
    return a +" "+ b
})
console.log("concatenar con reduce=", meLlamo);

