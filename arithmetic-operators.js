// arithmetic operators with objects
let energy ={
    valueOf(){
        return 100;
    },
};
let currentEnergy = energy + 10;
console.log(currentEnergy);

currentEnergy = energy- 10;
console.log(currentEnergy);

currentEnergy =energy/2;
console.log(currentEnergy);

currentEnergy = energy*2;
console.log(currentEnergy);

let money ={
    toString(){
        return 100;
    },
};

let currentMoney = energy + 10;
console.log(currentMoney);

currentMoney = energy- 10;
console.log(currentMoney);

currentMoney =energy/2;
console.log(currentMoney);

currentMoney = energy*2;
console.log(currentMoney);

