/**
 * numOfOccurences()
 *  Write an algorithm that takes in a string and determines how many of each letter there is, casing should not matter.
 * @param {string} str - A string of letters.
 * @returns {Object} letterCount - An object of all the letters w the number of times they appear in the string
 * 
 * EXAMPLE:
 *  const myString = "ccabbabbcbcb"
 *  numOfOccurences(myString);
 *  //> { a: 2, b: 6, c: 4 }
 * 
 */

function numOfOccurences(str){
  // Guard Clause
  //str could not be a string
  //str length could be zero
  if(typeof str !== "string" || str.length === 0){
    return "Error"   
  }

  //initialize accumulator
  let accumulator = {}

  //our logic goes here
  //iterate over the string
  for (let i = 0; i < str.length; i++){
    //make a variable to hold each letter as we iterate
    const letter = str[i].toLowerCase()

    //if the letter does not exist in our accumulator
    if(!accumulator[letter]){
        // add the letter to the accumulator
        accumulator[letter] = 1
    } else {
      // add one to the letter in the accumulator
      accumulator[letter] += 1
    }
  }

  // return accumulator
  return accumulator
}

// TEST
// console.log(numOfOccurences("AccabbabbCcbcbB"))
// console.log(numOfOccurences(35))
// console.log(numOfOccurences(""))

const myLetters = numOfOccurences("AccabbabbCcbcbB")
// console.log(myLetters)

/**
 * targetLetters()
 * ----------------
 * Write an algorithm that takes in an Object that has letters as the keys and a number as the value, that will return an Array of any letters that have a value greater than the "target"
 * @param {Object} letters - An object holding all the letters w their values
 * @param {Number} target - A number 
 * @returns {String[]} - An array of strings representing each letter than has a value higher than the target
 * 
 * EXAMPLE:
 *  const myLetters = { a: 2, b: 6, c: 4 }
 *  targetLetters(myLetters, 3);
 *  //> ["b", "c"]
 * 
 */

function targetLetters(letters, target){
  //Guard clause
  for (const key in letters){
    if(typeof letters[key] !== 'number'){
      return "One of the values is not a number"
    }
  }

  if (typeof target !== 'number'){
    return "Target must be a number"
  }

  
  //initialize accumulator
  let accumulator = []


  // our logic goes here
  for (const key in letters) {
    //prints out each key
    // console.log("Key:", key)
    //prints out the value for each key
    // console.log("Value:", letters[key])

    //if statement that checks if letters[key] > 3
    if(letters[key] > target){
      //add the letter to the accumulator
      //pushes key to the accumulator
      accumulator.push(key)
    } 
  }
  // return accumulator
  return accumulator
}
// TEST
// console.log(targetLetters(myLetters, 3))
// console.log(targetLetters(myLetters, "something else"))

/**
 * getCartTotal()
 * -----------------
 * Write an algorithm that will determine the total amount of all items in the cart. 
 * @param {Object[]} products - An array of products.
 * @param {number} products[].priceInCents - The price of the product, in cents.
 * @param {number} products[].quantity - The number of products being bought.
 * @returns {string} A formatted representation of the total, rounded to two decimal places.
 * 
 * EXAMPLE:
 *  const cart = [
      { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
      { name: "Socks", priceInCents: 900, quantity: 2 },
    ];
    getCartTotal(cart);
 *  //> "$30.00"
 */


// =====================================================================
    // NOTES 

  //   function calculateTotal(rolls){
  //     let count = 0;
  
  //     if (typeof rolls !== 'object'){
  //         return `value must be an array`
  
  //     }
  // // for (let i = 0; i < rolls.length; i++) {
  // //      count += rolls[i];
      
  // // }
  // // return count;
  // for (const roll of rolls) {
  //     count += roll
  // }
  // return count
  // }
  
  // // const rolls = [4,5,6,1]
  // // console.log(calculateTotal(rolls))
  
  // function getMinimumValue(rolls){
  //     if (rolls.length === 0){
  //         return `Array must have atleast one value`
  //     }
  //     let accumulator = rolls[0]
  
  //     for (let i = 1; i < rolls.length; i++) {
  //         const roll = rolls[i];
  //         if(roll < accumulator){
  //             accumulator = roll;
  //         }
          
  //     }
  //     return accumulator;
  // }
  
  // // const rolls = [4,5,6,1]
  // // console.log(getMinimumValue(rolls))
  
  // function listPlayers(names) {
  //     // guard clause 1
  //     if (names.length === 0){
  //         return `array must have at least one value`
  //     }
  
  //     // guard clause 2
  //     for (const name of names) {
  //         if(typeof name !== 'string'){
  //             return `one of the values is not a string`
  //         }
  //     }
  //     let accumulator = "";
    
  //     for (let name of names) {
  //       accumulator += name + ", "
  //     }
    
  //     return accumulator;
  //   }
    
  //   const players = ["Sebastian", "Kai", "Saanvi"];
  // //   const players = []
  //   console.log(listPlayers(players)); //> "Sebastian, Kai, Saanvi,"
  
  //   function hasSix(rolls) {
  //     let accumulator = false;
    
  //     for (let roll of rolls) {
  //       if (roll === 6) {
  //         accumulator = true;
  //       }
  //     }
    
  //     return accumulator;
  //   }
    
  // //   const rolls = [4, 5, 3, 1];
  // //   console.log(hasSix(rolls)); //> true
  
  //   function addBonusToAllRolls(rolls) {
  //     let accumulator = [];
    
  //     for (let roll of rolls) {
  //       let increased = roll + 2;
  //       accumulator.push(increased);
  //     }
    
  //     return accumulator;
  //   }
    
  // //   const rolls = [4, 5, 6, 1];
  // //   console.log(addBonusToAllRolls(rolls)); //> [ 6, 7, 8, 1 ];
  
  //   function getUniqueRolls(rolls) {
  //     let accumulator = {};
    
  //     for (let roll of rolls) {
  //       accumulator[roll] = true;
  //     }
    
  //     return accumulator;
  //   }
    
  //   const rolls = [4, 5, 6, 1, 5, 4, 4, 1];
  //   console.log(getUniqueRolls(rolls));
  //   //> { '1': true, '4': true, '5': true, '6': true }
  
  //   //   Write a function that counts how many of each character are in a given string.
  // //   Example: "aaabwfbaaaww" 
  //   function countchars(str){
  //     // inside function initialize a accumulator and assign it a value of {}
  //     if (typeof str !== 'string'){
  //         return `value must be a string`
  //     }
  //     let accumulator = {}
  
  //     for (let i =0; i <str.length; i++){
  //         let letter = str[i]
  //         if(!accumulator[letter]){
  //             //add the letter as a key and value as 1
  //             accumulator[letter]= 1
  //         }else{
  //             //add 1 to that key
  //             accumulator[letter] += 1
  //         }
  
  //     }
  
  //     return accumulator;
  //   }
  
  //   const count = "aaabwfbaaaww"
  //   console.log(countchars(count));