function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('momcmop');

console.log(check('mom'));
console.log(check('grot'));
console.log(check('momcmop'));