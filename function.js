function drive(speed){
    console.log("The speed is " +speed)
}

function mileage(distanceTravelled, litresFilled){
    let m = distanceTravelled/litresFilled;
    console.log('The mileage of the car is ' +m)
}

function carDetails(carBrand, carModel, color, bhp, isAuto, isAirBags){
    console.log("Car brand is " +carBrand);
    console.log("car model is " +carModel)
    console.log("Car color is " +color);
    console.log("Car bhp is " +bhp);
    console.log("Car is automatic " +isAuto);
    console.log("Car airbags " +isAirBags);
    mileage(500, 35);
    drive(200);
}

//drive(100);
//mileage(420, 30);
carDetails('Fiat', 'punto', 'Red', 63, false, true);

function greet(fname, lname){
    console.log('hello ' +fname+ ' ' +lname);
}

greet('karthik', 'bhat');

function squareNumber(number){
    let n = number * number;
    console.log('Square of ' +number+ ' is ' +n);
}

squareNumber(10);

function square(n){
    return n * n;
}

let num = square(9);
console.log('Square of 10 is ' +num);