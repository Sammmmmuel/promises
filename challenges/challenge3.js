/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


/**
 * Asynchronously returns a greeting for a specified name.
 * @param name The name of the person to greet.
 */
function greet(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof name === 'string') {
                resolve('Hello there, ' + name);
            } else {
                reject('Name must be a string!');
            }
        }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof str === 'string') {
                resolve(str.toUpperCase());
            } else {
                reject('Argument to uppercaser must be string');
            }
        }, 500);
    });
}

function spacer(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (typeof str === 'string') {
                resolve(str.split("").join(" "));
            } else {
                reject('Name must be a string!');
            }
        }, 1000);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    return uppercasedGreeting
}

async function mix(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spacedGreeting = await spacer(uppercasedGreeting)
    return spacedGreeting
}
/* Uncomment me! #1 */
result = mix('sam')
result
    .then((result) => {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })










/* Uncomment me! #2 */
// greetAndUppercase('Ducky')
//     .then(function(result) {
//         console.log(result)
//         return spacer(name)
//     })
//     .then((spaced) => {
//         console.log(spaced)
//     })
//     .catch(function(err) {
//         console.log(err)
//     })