const superHeroTeams = [
  {
    name: 'Dream Team',
    heroes: [
      {
        id: '1',
        name: 'Superman',
        superPowers: ['speed', 'x-ray vision', 'flying'],
      },
      {
        id: '2',
        name: 'Spieder-Man',
        superPowers: ['spieder sense'],
      },
      {
        id: '3',
        name: 'Batman',
        superPowers: ['money', 'immortality'],
      },
      {
        id: '4',
        name: 'Ivan',
        superPowers: ['Javascript'],
      },
    ],
  },
  {
    name: 'Dream Agent Team',
    heroes: [
      {
        id: '1',
        name: 'James Bond',
        superPowers: ['sexy', 'xharming', 'agility'],
      },
      {
        id: '2',
        name: 'Json Bourne',
        superPowers: ['losing memory'],
      },
      {
        id: '3',
        name: 'Jack Bauer',
        superPowers: ['punctuality'],
      },
    ],
  },
];

// Función que itera sobre los poderes
function* iteratePowers(superPowers, heroeVisited) { //se enañade superHero, para trabajar con el superHeroe de la funcion generadora iterateSuperHeroes
  for (let i = 0; i < superPowers.length; i++) { 
    const superPower = superPowers[i]; 
    yield {superPower, heroeVisited}; //{indica un objeto, y que se puede trabajar con el}; se recibe un superpower y un super héroe
  }
}

// Función que itera sobre heroes
function* iterateSuperHeores(superHeores) {
  for (let i = 0; i < superHeores.length; i++) {
    const superHeore = superHeores[i];
    yield* iteratePowers(superHeore.superPowers, superHeore); //Se le añade el "superHeroe", ahí se está enviando al superhéore mismo para seguir trabajando con el
  }
}

// Función que itera sobre los Equipos
function* iterateTeams(superHeoresTeams) {
  for (let i = 0; i < superHeoresTeams.length; i++) {
    const superHeoresTeam = superHeoresTeams[i];
    yield* iterateSuperHeores(superHeoresTeam.heroes);
  }
}

//Crea objeto generador (mandando al arreglo completo)
const generatorObject = iterateTeams(superHeroTeams);

// Datos de busqueda
const superPowerWanted = "immortality"
//const superPowerWanted = prompt("¿Qué super poder buscamos?") //Me gusta añadir prompts para trabajar con el usuario :)

//let found = false; // Variable booleana para ver si hemos encontrado el superpoder
let counter = 0; // Contador para llevar la cuenta de las comparaciones realizadas
let found=false;
// El bucle for..of  itera directamente sobre el objeto generador (generatorObject) y obtiene los valores de superPower y Héroes por cada iteración
for (const { superPower, heroeVisited } of generatorObject) {
  counter++; // Se incrementa el contador por cada iteración
  
// Se compara el superpoder actual con el superpoder buscado
  if (superPower === superPowerWanted) {
    found=true; //aquí el super poder se ha encontrado
    console.log(`El super poder de ${superPowerWanted} le pertenece a ${heroeVisited.name}`);   
    break; // Se sale del bucle con break
  }
}

//Si el superpoder no se encontró found equivale aún equivale a false; por tanto se imprime lo siguiente
if(found === false){
  console.log(`El super poder de ${superPowerWanted} no fue encontrado en el conjunto de datos`);
}
console.log(`El sistema realizó ${counter} comparaciones en el conjunto de datos`);