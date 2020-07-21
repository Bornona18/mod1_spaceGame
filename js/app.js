//class for player
class user {
    constructor(hull, firepower, accuracy) {

        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    sayHi() {
        alert(this.name);
    }

}

//class for ship
class ship {
    constructor(order, hull, firepower, accuracy) {
        this.order = order;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    sayHi() {
        alert(this.name);
    }

}
//function to generate hull,damage
function randval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function to generate accuracy
function powerrand(min, max) {
    return Math.random() * (max - min) + min;
}



//creation of player
let player = new user(20, 5, 0.7);

//creation of ships
let ship1 = new ship(1, randval(3, 6), randval(2, 4), powerrand(0.6, 0.8));
let ship2 = new ship(2, randval(3, 6), randval(2, 4), powerrand(0.6, 0.8));
let ship3 = new ship(3, randval(3, 6), randval(2, 4), powerrand(0.6, 0.8));
let ship4 = new ship(4, randval(3, 6), randval(2, 4), powerrand(0.6, 0.8));
let ship5 = new ship(1, randval(3, 6), randval(2, 4), powerrand(0.6, 0.8));
let ship6 = new ship(1, randval(3, 6), randval(2, 4), powerrand(0.6, 0.8));


//guide to user
console.log("Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.");

var ship1des, ship2des, ship3des, ship4des, ship5des, ship6des, end

function attack() {
    //prompt

    //attacks
    alert("Press 'OK' to attack the ship");

    //calculates accuracy
    var currentaccuracy = Math.random()

    //finds alive ship
    if (typeof ship1 == "object") {
        var currentship = ship1;
        ship1.accuracy = powerrand(0.6, 0.8);
    } else if (typeof ship2 == "object") {
        var currentship = ship2;
        ship2.accuracy = powerrand(0.6, 0.8);
    } else if (typeof ship3 == "object") {
        var currentship = ship3;
        ship3.accuracy = powerrand(0.6, 0.8);
    } else if (typeof ship4 == "object") {
        var currentship = ship4;
        ship4.accuracy = powerrand(0.6, 0.8);
    } else if (typeof ship5 == "object") {
        var currentship = ship5;
        ship5.accuracy = powerrand(0.6, 0.8);
    } else if (typeof ship6 == "object") {
        var currentship = ship6;
        ship6.accuracy = powerrand(0.6, 0.8);
    }

    //attack process
    if (currentaccuracy < currentship.accuracy) {

        currentship.hull = currentship.hull - player.firepower;
        console.log('you have attacked the ship');
        if (ship1.hull < 1) {
            ship1 = 'destroyed';
            if (ship1des != 'shown') {
                let retreat = confirm('The ship has been destroyed.Are you ready to attack the next ship now?');
                if (retreat == false) {
                    console.log('You have retreated. Game over!');
                }
                ship1des = 'shown';
            }
        }
        if (ship2.hull < 1) {
            ship2 = 'destroyed';
            if (ship2des != 'shown') {
                let retreat = confirm('The ship has been destroyed.Are you ready to attack the next ship now?');
                if (retreat == false) {
                    console.log('You have retreated. Game over!');
                }
                ship2des = 'shown';
            }
        }
        if (ship3.hull < 1) {
            ship3 = 'destroyed';
            if (ship3des != 'shown') {
                let retreat = confirm('The ship has been destroyed.Are you ready to attack the next ship now?');
                if (retreat == false) {
                    console.log('You have retreated. Game over!');
                }
                ship3des = 'shown';
            }
        }
        if (ship4.hull < 1) {
            ship4 = 'destroyed';
            if (ship4des != 'shown') {
                let retreat = confirm('The ship has been destroyed.Are you ready to attack the next ship now?');
                if (retreat == false) {
                    console.log('You have retreated. Game over!');
                }
                ship4des = 'shown';
            }
        }
        if (ship5.hull < 1) {
            ship5 = 'destroyed';
            if (ship5des != 'shown') {
                let retreat = confirm('The ship has been destroyed.Are you ready to attack the next ship now?');
                if (retreat == false) {
                    console.log('You have retreated. Game over!');
                }
                ship5des = 'shown';
            }
        }
        if (ship6.hull < 1) {
            ship6 = 'destroyed';
            console.log('congrats! you have won the game!!');
            end = true;
        }

    } else {
        console.log('The ship attacked you');
        player.hull = player.hull - ship1.firepower;
        if (player.hull < 1) {
            console.log('Ooops! you have lost the game!');
            end = true;
        }
    }

}

while (end != true) {
    attack();
}
