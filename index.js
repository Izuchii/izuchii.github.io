 // Profile Lookup
    /* The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */
    // Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

// Solution
function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) {
        if(contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
        }
    }
    return "No such contact";
    // Only change code above this line
}
lookUpProfile("Akira", "likes");



// Class
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature;
document.getElementById("demo5").innerHTML = temp;






// Promise
// Producing code
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    // let responseFromServer = true;
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
});
// Consuming code
makeServerRequest.then(result => {
    console.log(result);
})
makeServerRequest.catch(error => {
    console.log(error);
})
makeServerRequest.then(
    result => console.log(result),
    error => console.log(error)
)
// makeServerRequest.then(res => console.log(res), err => console.log(err))


async function myFunction() {
    return "Halo Nonso";
}
myFunction().then(value => console.log(value));
// console.log(myFunction())

async function myFunc() {
    let myPromise = new Promise((resolve, reject) => {
        let x = 1;
        if(x === 0) resolve("Nonso Here");
        else reject("Value failed");
    })
    console.log(await myPromise)
}
myFunc();

async function myDisp() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Nonso's Coding!")
        }, 4000)
    })
    console.log(await myPromise)
}
myDisp();




// Regex
let str1 = "freeCodeCamp";
let regex1 = /Code/;
console.log(regex1.test(str1));


let str2 = "He chose no for the game, and she said yes but maybe";
let regex2 = /yes|no|maybe/;
console.log(regex2.test(str2));


console.log("Hello, World!".match(/Hello/));


let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));


let reg1 = 'string'.match(/str/);
let reg2 = /reg/.test('regex');
console.log(reg1);
console.log(reg2);


console.log("Repeat, Repeat, Reap".match(/Repeat/g));
console.log(/Repeat/.test("Repeat, Repeat, Reap"));


let qSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result1 = qSample1.match(alphabetRegex);
console.log(result1);


let qSample2 = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi;
let result2 = qSample2.match(myRegex);
// let result2 = myRegex.test(qSample2);
console.log(result2);


let difficultSpelling = "Mississippi";
let myRgx = /s+/g; // Change this line
let reslt = difficultSpelling.match(myRgx);
console.log(reslt);



let qSample3_1 = "abc";
let qSample3_2 = "aabc";
let qSample3_3 = "abab";
let myReg = /a+/g;
let result3_1 = qSample3_1.match(myReg);
let result3_2 = qSample3_2.match(myReg);
let result3_3 = qSample3_3.match(myReg);
console.log(`a in 'abc' using (+): ${result3_1}`);
console.log(`a in 'aabc' using (+): ${result3_2}`);
console.log(`a in 'abab' using (+): ${result3_3}`);


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieQuote = "Abaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
// let chewieRegex = /A[a-z]*g/;
// let chewieRegex = /A[a]*r/;
let result4 = chewieQuote.match(chewieRegex);
console.log(result4);


// let chewieeQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieeRegex = /A[a-z]*?g/;
// let chewieeRegex = /A[a]*r/;
let chewieeQuote = "titanic";
// let chewieeRegex = /t[a-z]*i/;
let chewieeRegex = /t[a-z]*?i/;
let result5 = chewieeQuote.match(chewieeRegex);
console.log(result5);


let text = "<h1>Winter is coming</h1>";
let myRegx = /<.*?>/; // Change this line
let result6 = text.match(myRegx);
console.log(result6);


let firstString = "Ricky is first and can be found.";
// let firstRegex = /[^Ricky]/;
let firstRegex = /^Ricky/;
let result7_1 = firstRegex.test(firstString);
console.log(result7_1);
let notFirst = "You can't find Ricky now.";
let result7_2 = firstRegex.test(notFirst);
console.log(result7_2);


let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result);


let string1 = "cat";
let string2 = "ct";
let string3 = "caaaaaaaaaaat";
let strRegex1 = /ca*t/;
let strRegex2 = /ca+t/;
let strRegex3 = /ca?t/;
let strResult = string3.match(strRegex3);
console.log(strResult);


let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));


let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));
let checkPasss = /.*/;
console.log(password.match(checkPasss));


let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
console.log(repeatRegex.test(repeatStr)); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]


let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;
// let reRegex = /(test)\s\1/;
let result_ = testString.match(reRegex);
console.log(result_);


let str = "1 turkey costs $30";
let regexp = /(?<=(\$|£))\d+/;
console.log(str.match(regexp)); // 30, $


let strng1 = "0 12 -5 123 -18";
// let regexp1 = /(?<!\-)(?<!\d)\d+/g;
let regexp1 = /(?<![\-\d])\d+/g;
console.log( strng1.match(regexp1) ); // 0, 12, 123


let strng2 =
`<html>
<body style="height: 200px">
...
</body>
</html>`;
let regexp2 = /(?<=<body.*?>)/g;
console.log( strng2.replace(regexp2, `<h1>Hello</h1>`)); // 0, 12, 123
// console.log( strng2.replace(/<body.*?>/, '$&<h1>Hello</h1>')); // 0, 12, 123





// Objects
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};
tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';


const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: true
    }
}
function countOnline(usersObj) {
    let result = 0;
    for (let x in usersObj) {
        if (usersObj[x].online == true) {
            result++;
        }
    }
    return result;
}
console.log(countOnline(users));


const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));





// Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
}, {})
console.log(countedNames);


// Grouping objects by a property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(obj)
        return acc
    }, {})
}
let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople);


// Remove duplicate items in an array
const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
        previousValue.push(currentValue)
    }
    return previousValue
}, [])
console.log(myArrayWithNoDuplicates)




// some(), every(), filter(), map(), reduce(), find(), 
function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// Define the callback function.
function CheckIfEven(value, index, ar) {
    document.write(value + " ");

    if (value % 2 == 0)
        return true;
    else
        return false;
}

// Create an array.
var numbers = [2, 4, 5, 6, 8];

// Check whether the callback function returns true for all of the
// array values.
if (numbers.every(CheckIfEven))
    document.write("All are even.");
else
    document.write("Some are not even.");

// Output:
// 2 4 5 Some are not even.



arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
    arr.push('new')
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4
})



function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, size + i));
    }
    // while (arr.length > 0) {
    //     newArr.push(arr.splice(0, size));
    // }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));





// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

    // Only change code below this line

    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);



// Farenheit to Celsius conversion
function f2c(x) {
    function convert(str, p1, offset, s) {
      return ((p1 - 32) * 5/9) + 'C';
    }
    let s = String(x);
    let test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}

// Celsius to farenheit conversion
function c2f(x) {
    function convert(str, p1, offset, s) {
      return ((p1 * 9) / 5 + 32) + 'F';
    }
    let s = String(x);
    let test = /(-?\d+(?:\.\d*)?)C\b/g;
    return s.replace(test, convert);
}



function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
    .fill(0).map((_, i) => i + min);

    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return range.reduce(lcm)
}
console.log(smallestCommons([1,50]));



// Roman Numerals Conversion
function convertToRoman(num) {
    const roman = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
        20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C",
        200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"
    }
    let digits = String(num).split("");
    let lookUp = [];
    for (let i = 0; i < digits.length; i++) {
      lookUp.push(digits[i] * Math.pow(10, digits.length-i-1))
    }
    return lookUp.map(x => roman[x]).join("");
}
console.log(convertToRoman(2014));



// Caesar's Cypher 1
function rot13(str) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let arrStr = str.split(" ")
    return arrStr.map(x => {
        let result = "";
        for (let i = 0; i < x.length; i++) {
            if (alpha.indexOf(x[i]) === -1) result += x[i];
            else if (alpha.indexOf(x[i]) < 13) result += alpha[alpha.indexOf(x[i]) + 13];
            else result += alpha[alpha.indexOf(x[i]) - 13]
        }
        return result
    }).join(" ")
}
console.log(rot13("SERR CVMMN!"));

// Caesar's Cypher 2
function rot13(str, num) {
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    for(let x of str) {
        if (alph.indexOf(x) == -1) res += x;
        else if (alph.indexOf(x) + num > 25) res += alph[Math.abs(alph.indexOf(x) + num - 26)];
        else res += alph[alph.indexOf(x) + num];
    }
    return res;
}
console.log(rot13("ZERR PBQR PNZC", 1));


// USA Telephone No Validation
function telephoneCheck(str) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})[\-|\s]?(\d{3})[\-|\s]?(\d{4})$/g.test(str);
}
console.log(telephoneCheck("555-555-5555"));



// Cash Register
function checkCashingRegister(price, cash, cid) {
    var change;
    let ret = cash - price;
    const total = cid.reduce((p, c) => accAdd(p, c[1]), 0);

    if (ret == total) {
        change = { status: "CLOSED", change: cid }
    } else if (ret > total) {
        change = { status: "INSUFFICIENT_FUNDS", change: [] }
    } else {
        const M1 = {
            PENNY: 0.01, NICKEL: 0.05, DIME: 0.1, QUARTER: 0.25, ONE: 1, FIVE: 5, TEN: 10, TWENTY: 20, "ONE HUNDRED": 100
        }
        const M2 = cid.reduce((p, c) => { p[c[0]] = c[1]; return p; }, {});
        const retChange = [];
        ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"].forEach(unit => {
        let ret1;
        if (!+ret) return;
        if (M2[unit] && (ret1 = Math.floor(accDiv(ret, M1[unit])))) {
            const ret2 = accMul(ret1, M1[unit]);
            if (M2[unit] >= ret2) {
                retChange.push([unit, ret2]);
                ret = accSub(ret, ret2);
            } else {
                retChange.push([unit, M2[unit]]);
                ret = accSub(ret, M2[unit]);
            }
        }
        })

        if (+ret) {
            change = { status: "INSUFFICIENT_FUNDS", change: [] }
        } else {
            change = { status: "OPEN", change: retChange }
        }
    }
    return change;
}

function accAdd (arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));

    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

function accSub (arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }

    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;

    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

function accMul (arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }

    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }

    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function accDiv (arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }

    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }

    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));

    return (r1 / r2) * Math.pow(10, t2 - t1);
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));



function checkCashRegister(price, cash, cid) {
    //all money values are multiplied by 100 to deal with precision errors involved with decimals
    const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];
    const cidMap = new Map(cid); 

    function transaction(price, cash, cid) {
        let changeNeeded = (cash - price) * 100;
      //money will be pushed to the second value in each array
        let moneyProvided = [
        ["ONE HUNDRED", 0], 
        ["TWENTY", 0], 
        ["TEN", 0], 
        ["FIVE", 0], 
        ["ONE", 0], 
        ["QUARTER", 0], 
        ["DIME", 0], 
        ["NICKEL", 0], 
        ["PENNY", 0],
        ];
        //take the cid, reverse it (like in Roman Numerals exercise), multiply values by 100
        let availCash = [...cid].reverse().map(el => [el[0], el[1] * 100]);
        //get the total sum of all cash and divide by 100
        let sumOfCash = availCash.reduce((a, b) => (a + b[1]),0) / 100;
        //if sumOfCash is exact change needed return
        if (sumOfCash === changeNeeded / 100) {
        return {status: "CLOSED", change: [...cid]};
        }
        //else, run this function
        else for (let i = 0; i < availCash.length; i++) {
        //if denomination values are less than changeNeeded and availableCash values are greater than 0, run the while loop
            while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
            //1. moneyProvided array is increased by denomination value
            moneyProvided[i][1] += denomination[i];
            //2. changeNeeded is decreased by same denomination value
            changeNeeded -= denomination[i];
            //3. availCash is also decreased by same denomination value
            availCash[i][1] -= denomination[i];
            }
        };
        //clean up the moneyProvided array by
        let change = moneyProvided
        //1. resetting the money values by dividing by 100
        .map(el => [el[0], el[1] / 100])
        //2. filtering out all non-empty dollar and value arrays
        .filter(el => el[1] !== 0);
        //calculate the total of the change array
        let changeTotal = change.reduce((a, b) => (a + b[1]),0);
        //if the total change is less than the change needed
        if (changeTotal < changeNeeded) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change};
    }

    //this is where the transaction function is called
    let answer = transaction(price, cash, cid);
    //here the final answer is provided if the 2 if statements don't catch it first
    return answer;
};
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));



// Converting Decimal to Binary
// document.getElementById("demo").innerHTML = dec2bin(5);
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
console.log(dec2bin(-5));




// Cookies
const setCookie = (cname, cval, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cval};${expires};path=/`
}
const uAgent = navigator.userAgent;
// setCookie("user", "Nonso", 30)

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cArr = decodedCookie.split(";");
    for (let x of cArr) {
        while(x.charAt(0) == " ") {
            x = x.substring(1);
        }
        if (x.indexOf(name) == 0) return x.substring(name.length, x.length);
    }
    return "";
}
console.log(getCookie("user"));

const checkCookie = () => {
    let userCheck = getCookie("user");
    if(userCheck != "" && userCheck != null) return `Cookie variable-value set!\n Welcome again ${userCheck}`;
    else {
        userCheck = prompt("Enter your name:", "");
        if(userCheck != "" && userCheck != null) {
            setCookie("user", userCheck, 365)
        }
    }
}
// console.log(checkCookie());


const delCookie = () => {
    let validCookie = decodeURIComponent(document.cookie);
    let cArr = validCookie.split(";")
    let cookToDel = prompt("Type the key of Cookie to delete", "");
    let valCookie = "";
    if(cookToDel != "" && cookToDel != null) {
        for(let x of cArr) {
            if(x.split("=")[0] == cookToDel) valCookie = cookToDel;
            else alert("Invalid cookie key");
        }
        let d = new Date();
        d.setTime(d.getTime() + (-1000*24*60*60*1000))
        let expires = d.toUTCString();
        document.cookie = `${valCookie}=;expires=${expires};path=/`;
    } else alert("No value entered. Enter a valid Cookie key");
}





// Navigation | Geolocation
const getLocation = () => {
    if(navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
    else console.log("Geolocation not supported by the browser");
}
// getLocation();
function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude} \n Logitude: ${position.coords.longitude}`)
}





const delLocStorage = () => {
    let storToDel = prompt("Type the key of Cookie to delete", "");
    if(storToDel != "" && storToDel != null) {
        for(let i = 0; i < localStorage.length; i++) {
            if(storToDel == localStorage.key(i)) localStorage.removeItem(storToDel);
            else alert("Invalid localStorage key");
        }
    } else alert("No value entered. Enter a valid Cookie key");
}
const delSesStorage = () => {
    let storToDel = prompt("Type the key of Cookie to delete", "");
    if(storToDel != "" && storToDel != null) {
        for(let i = 0; i < sessionStorage.length; i++) {
            if(storToDel == sessionStorage.key(i)) sessionStorage.removeItem(storToDel);
            else alert("Invalid sessionStorage key");
        }
    } else alert("No value entered. Enter a valid Cookie key");
}


let x = document.cookie;
document.getElementById("demo1").innerHTML = x;
console.log(x);





// DOM
document.getElementById("demo2").innerHTML = 
`document.anchors: ${document.anchors}<br><br>
document.baseURI: ${document.baseURI}<br><br>
document.body: ${document.body}<br><br>
document.cookie: ${document.cookie}<br><br>
document.doctype: ${document.doctype}<br><br>
document.documentElement: ${document.documentElement}<br><br>
document.documentMode: ${document.documentMode}<br><br>
document.documentURI: ${document.documentURI}<br><br>
document.domain: ${document.domain}<br><br>
document.embeds: ${document.embeds}<br><br>
document.forms: ${document.forms}<br><br>
document.head: ${document.head}<br><br>
document.images: ${document.images}<br><br>
document.implementation: ${document.implementation}<br><br>
document.inputEncoding: ${document.inputEncoding}<br><br>
document.lastModified: ${document.lastModified}<br><br>
document.links: ${document.links}<br><br>
document.readyState: ${document.readyState}<br><br>
document.referrer: ${document.referrer}<br><br>
document.scripts: ${document.scripts}<br><br>
document.strictErrorChecking: ${document.strictErrorChecking}<br><br>
document.title: ${document.title}<br><br>
document.URL: ${document.URL}<br>`;


// DOM Manipulation
function myFunk() {
    document.open("text/html", "replace");
    document.write("<h2>Learning about the HTML DOM is fun!</h2>");
    document.close();
}

function myFunck() {
    const wOpen = window.open();
    wOpen.document.open();
    wOpen.document.write("<h2>Learning about the HTML DOM is fun!</h2>\n<h3>Hello World</h3>");
    wOpen.document.close();
}

const openW = () => window.open("https://www.w3schools.com");

const openWi = () => window.open("https://www.w3schools.com", "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");

let myWin;
const openWin = () => myWin = window.open("", "", "width=500, height=300");
const blurWin = () => myWin.blur();
const focusWin = () => myWin.focus();

let myWind;
const openWind = () => myWind = window.open("", "", "width=500, height=300");
const closeW = () => myWind.close();

let myWindo;
const openWindo = () => myWindo = window.open("", "", "width=500, height=300");
const closeWi = () => myWindo.close();
const checkW = () => {
    let msg = "";
    if(!myWindo) msg = " was not opened";
    else {
        if(myWindo.closed) msg = " is closed";
        else msg = " is open"
    }
    document.getElementById("demo3").innerHTML = "myWindo" + msg;
}

const openWindow = () => {
    let myWin = window.open("", "", "width=500, height=300");
    myWin.opener.document.getElementById("demo4").innerHTML = "A new window was just opened";
}

let myWndow;
const openWndow = () => myWndow = window.open("", "", "width=500, height=300");
const movWin = () => {myWndow.moveBy(200, 200); myWndow.focus()}

let myWindow;
const openWindoww = () => myWindow = window.open("", "", "width=500, height=300");
const movWindow = () => {myWindow.moveTo(300, 0); myWindow.focus()}

const printPage = () => window.print();

let miWin;
const opWin = () => miWin = window.open("", "", "width=100, height=70");
const resizeWindow = () => {miWin.resizeBy(200, 100); miWin.focus()}

let miWind;
const opWind = () => miWind = window.open("", "", "width=100, height=70");
const resWindow = () => {miWind.resizeTo(400, 300); miWind.focus();}

const scrollWin = () => window.scrollBy(0, 200);

const scrollWind = () => window.scrollTo(0, 200);

const locAssign = () => location.assign("https://www.w3schools.com");
const locReplace = () => location.replace("https://www.w3schools.com");