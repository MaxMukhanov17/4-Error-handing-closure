const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


let myMin=1;
let myMax=10; 
let randomNumber = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

let counter = 0;

const fs = require('fs');
const { callbackify } = require('node:util');
function log(pathToFile) {
    if(pathToFile) {
        fs.writeFileSync(pathToFile, ""); 
    }

    return function add(line) {
        if(pathToFile) {
            fs.appendFile(pathToFile, line, 'utf8', (err) => {
                if(err) {
                    console.log("Ошибка");
                } 
            });
        }
        console.log(line);
    };
}

function play(response) {
    rl.question('Введите число от 1 до 10: ', (input) => {
        let userNumber = +input;

        if(isNaN(userNumber) || userNumber < myMin || userNumber > myMax) {
            response(`Неверный ввод( `);
            play(response);
        }

        counter++;
    
        if(userNumber === randomNumber) {
            response(`Вы угадали! Это число: ${randomNumber}. Использовано попыток: ${+counter}\n`);
            rl.close();
            return;
        }
    
        if(userNumber > randomNumber) {
            response(`Меньше!  Вы ввели: ${userNumber}. Попытка #${counter}\n`);
        } else {
            response(`Больше! Вы ввели: ${userNumber}. Попытка #${counter}\n`);
        }
    
        rl.pause();
        play(response);
    });
}

let response = log("./log");
play(response);