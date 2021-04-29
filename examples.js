
function capitalized(firstLetter) {
    console.log(firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1));
}

capitalized('octopus');

let day = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else {
        return (day)[num];
    }
}

/*
for (const days in day) {
    console.log(days);
}

Output:
1
2
3
4
5
6
7*/

// Example of Lexical scope
function bankRobbery() {
    const heroes = ['Scarlet Witch', 'Black Panther', 'Deadpool', 'Thor', 'Hulk'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`);
        }
    }
    cryForHelp();
}

// Example of higher order functions; passing a function as an argument
function callTwice(func) {
    func();
    func();
}

/* Output:
callTwice(rollDie)
4
5
*/

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

/* Output:
callTenTimes(rollDie)
3
1
1
6
6
4
3
1
2
2
*/

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

// Example of a returning function

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);

/* Output:
isChild(7)
true

isChild(22)
false
*/

// Example of forEach method -- could use the for of loop in replace
// of this but still good to know

const movies = [
    {
        title: 'Alien',
        score: 90
    },

    {
        title: 'Pacific Rim',
        score: 75
    },

    {
        title: 'The Notebook',
        score: 85
    },

    {
        title: 'Training Day',
        score: 80
    },

    {
        title: 'School of Rock',
        score: 95
    },
]

movies.forEach(function (list) {
    console.log(`${list.title} - ${list.score}/100`);
})

/* Output:
Alien - 90/100
Pacific Rim - 75/100
The Notebook - 85/100
Training Day - 80/100
School of Rock - 95/100

if it was a for of loop, same output

for (let list of movies){
    console.log(`${list.title} - ${list.score}/100`);
}
*/