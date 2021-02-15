//create a series of objects to be transferred to mongo db database
const salviaNemorosa = {
  name: "Salvia Nemorosa",
  commonName: "sage",
  family: "lamiaceae",
  evergreen: false,
  flower: true,
  floweringPeriod: "june,july",
  flowerColor: "purple",
  flowerColourHex:"#865EB7",
  foliage: true,
  foliageColor: "sage green",
  foliageColorHex: "#85C984",
  heightCM: 50,
  spreadCM: 50,
  springInterest: true,
  summerInterst: true,
  autumnInterest: false,
  winterInterest: false,
  soilType: "moist, well drained",
  sunlight: "full or partial shade",
  platingDensityPerMeter: 3,
  plantingGrouping: 3,
  pricePerUnit: 5,
};

const artemesiaPowisCastle = {
  name: "Artemesia Powis Castle",
  commonName: "wormwood",
  family: "asteraceae",
  evergreen: true,
  flower: true,
  floweringPeriod: "august",
  flowerColor: "yellow",
  flowerColourHex:"#F1CA64",
  foliage: true,
  foliageColor: "silver",
  foliageColourHex:"#B7CBD2",
  heightCM: 60,
  spreadCM: 90,
  springInterest: true,
  summerInterst: true,
  autumnInterest: false,
  winterInterest: false,
  soilType: "well drained, fertile",
  sunlight: "full",
  platingDensityPerMeter: 1,
  plantingGrouping: 1,
  pricePerUnit: 5,
};

const buxusSempavirensSixtyCM = {
  name: "buxus Sempavirens 60cm Ball",
  commonName: "box",
  family: "buxaceae",
  evergreen: true,
  flower: true,
  floweringPeriod: "may",
  flowerColor: "yellow",
  flowerColourHex:"#D6D795",
  foliage: true,
  foliageColor: "green",
  foliageColourHex:"#66A016",
  heightCM: 60,
  spreadCM: 60,
  springInterest: true,
  summerInterst: true,
  autumnInterest: true,
  winterInterest: true,
  soilType: "moist, well drained,",
  sunlight: "partial",
  platingDensityPerMeter: 1,
  plantingGrouping: 1,
  pricePerUnit: 25,
};

const buxusSempavirensFortyCM = {
  name: "buxus Sempavirens 40cm Ball",
  commonName: "box",
  family: "buxaceae",
  evergreen: true,
  flower: true,
  floweringPeriod: "may",
  flowerColor: "yellow",
  flowerColourHex:"#D6D795",
  foliage: true,
  foliageColor: "green",
  foliageColourHex:"#66A016",
  heightCM: 40,
  spreadCM: 40,
  plantAreaCM: 1600,
  springInterest: true,
  summerInterst: true,
  autumnInterest: true,
  winterInterest: true,
  soilType: "moist, well drained,",
  sunlight: "partial",
  platingDensityPerMeter: 2,
  plantingGrouping: 3,
  pricePerUnit: 20,
};

//generic non specific array containing all plants
const classicModernScheme = [
  salviaNemorosa,
  artemesiaPowisCastle,
  buxusSempavirensFortyCM,
  buxusSempavirensSixtyCM,
];

// example creation of random plant from the array
function randomPlantSelection(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var randomPlant = randomPlantSelection(classicModernScheme);
//classicModernScheme[Math.floor(Math.random()*classicModernScheme.length)];
console.log(randomPlant);

//Test to see if the areaPerUnit value calculates
function areaPerUnit(plant) {
  return plant.spreadCM * plant.spreadCM;
}
// let randomArea = areaPerUnit(randomPlant)
// console.log(randomArea);

// define the area of the bed
function bedArea(lengthCM, depthCM) {
  return lengthCM * depthCM;
}

let bed1 = bedArea(400, 150);
console.log(bed1);

//calculations to define how many of a single variety of a random plant would be need to fill bed1(example bed) rounded down
// console.log(Math.floor(bed1/randomArea));

// write a function that takes in the area of a chosen bed and creates a plant scheme at random using the planting density * the
//spreadCM values to fill the beds area must be under the total area.
let newPlantList = [];

function plantScheme(bed, array) {
  let p = randomPlantSelection(array);
  let pa = p.plantingGrouping;
  let c = p.pricePerUnit * pa;
  let plants = { name: p.name, quantity: pa, price: c };
  //let newPlantList = [];
  // newPlantList.push(p.name + " x " + pa + " £ " + " @ " + c);
  newPlantList.push(plants);
  bed = bed - p.plantingGrouping * (p.spreadCM * p.spreadCM);
  console.log(bed);
  if (bed > 2500) {
    plantScheme(bed, array);
    //console.log(newPlantList);
  }
}
let remainingBed = plantScheme(bed1, classicModernScheme);
console.log(newPlantList.sort((a, b) => a - b));

//add up each instance of cost and return as total sum

var priceTotal = newPlantList.reduce(function (prev, cur) {
  return prev + cur.price;
}, 0);

console.log("Total Price £:", priceTotal);

//condence the array to only have on instance of each plant type and update the quantity for order sheet


