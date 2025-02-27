const jedi = [
    'luke'
]

const arrayNum1 = jedi.push('Obi-Wan Kenobi')


const arrayNum2 = jedi.unshift('yoda')

console.log(jedi);

console.log('luke'[0]);
console.log('luke'[1]);
console.log('luke'[2]);
console.log('luke'[3]);

const arrayNum3 = jedi.pop()

const arrayNum4 = jedi.shift()

console.log(jedi);

const sithLords = [
    'Darth Vader',
    'Darth Sidious',
    'Darth Maul'

]

console.log(sithLords);

const imperialOfficers = [
    'Grand Moff Tarkin',
    'Orson Krennic'
]

const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains);

console.log(starWarsVillains.slice(2, 3), starWarsVillains.slice(3, 4));

const droids = {
    astromech: 'R2-D2',
    protocol: 'C-3PO',
    assassin: 'IG-88'
}

console.log(droids['astromech']);
console.log(droids.protocol);
console.log(droids.assassin = 'IG-11');








