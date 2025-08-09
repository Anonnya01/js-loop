// const section = `sky`;
// console.log(typeof section);
// console.log(section.length);
// console.log(section[2]);



// // for object--------------
// const status = new String(`sad`);
// console.log(typeof status);
// console.log(status);

// --------case-----------//

// const school = 'Milestone School & College';
// // to change the value
// console.log(school.toLowerCase());

// const sub = ' Math';
// const book = 'math';
// if(sub.toLowerCase() === book.toLowerCase() ){
//     console.log("i love this subject");

// }
// else{
//     console.log('Wrong book');

// }

// --------trim---------//
// if space come before/ after string

// const drink = 'milk tea';
// const temp = 'milk tea ';
// if(drink.trim() === temp.trim()){
//     console.log('i love tea');

// }
// else{
//     console.log('only hot tea');

// }

// ---------slice------------//
// const address = "diyabari";
// const part = address.slice(0, 4);
// console.log(part);


// ---------split------------
// const drink ='Strawberry matcha latte with whole milk';
// console.log(drink.split(' '));
// console.log(drink.split('a'));


// -------------------join-----------//

// const products =['milk','fish','egg','meat','vegs'];
// console.log(products.join('|'));
// console.log(products.join());


//---------- Reverse----------//

// const drink ='Strawberry matcha latte with whole milk';
// let revers = ''
// for(const letter of drink){
//     revers= letter + revers;
    
// }
//  console.log(revers);
   
    

// // ---------concat------------
// const first ='boba';
// const last ='tea';
// const full = first + ' ' + last;
// console.log(full);
// // different concat style

// // // 1
// // // const full2 = first.concat(' ' , last).concat(last)
// // // 2
// const full2 = first.concat(' ',last);
// console.log(full2);

// // ---Includes------------//
// console.log(last.includes('t'));




// const sen = "dustu chele sazid"
// const words = sen.split(" ")
// const targetedWord = words[0]
// const firstWord = targetedWord.split("")
// const firstWordFirstLetter = firstWord[0]
// const uppercaseLetter =  firstWordFirstLetter.toUpperCase()
// const restWords = firstWord.slice(1) 
// words[0]  = uppercaseLetter + restWords.join("")

// const result = words.join(" ")

// console.log(result);



const sen =  "dustu meye anonnya"

const words = sen.split(" ")

//  [ "dustu" "meye" "anonnya"]

for(let i = 0; i < words.length; i++){
    const letters = words[i].split("") 
    const firstLetters = letters[0].toUpperCase();
    const restLetters = letters.slice(1).join("");
    words[i] = firstLetters + restLetters
}

const result = words.join(" ")

console.log(result);