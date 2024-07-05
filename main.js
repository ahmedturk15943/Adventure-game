#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.blue("Please Enter Your Name"),
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink portion", "Run For Your Life.."],
            },
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`\n${p1.name} fuel is ${p1.fuel}\n`);
                console.log(`\n${o1.name} fuel is ${o1.fuel}\n`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.cyan("You win"));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.Opt == "Run For Your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    //Alien
    let ask = await inquirer.prompt([
        {
            name: "Opt",
            type: "list",
            message: "what would you like to do",
            choices: ["Attack", "Drink portion", "Run For Your Life.."],
        },
    ]);
    if (ask.Opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (p1.fuel <= 0) {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (o1.fuel <= 0) {
                console.log("You win,  ");
                process.exit();
            }
        }
    }
    if (ask.Opt == "Drink portion") {
        p1.fuelIncrease();
        console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
    }
    if (ask.Opt == "Run For Your Life..") {
        console.log("You Loose, Better Luck Next Time");
        process.exit();
    }
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink portion", "Run For Your Life.."],
            },
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win,  ");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.Opt == "Run For Your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink portion", "Run For Your Life.."],
            },
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win,  ");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.Opt == "Run For Your Life..") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
