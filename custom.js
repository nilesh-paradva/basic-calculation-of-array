// q-1
let arr_4 = ["Red", "Green", "White", "Black"];
document.getElementById("n1").innerHTML = arr_4.join(',');
document.getElementById("n2").innerHTML = arr_4.join('+');
document.getElementById("n3").innerHTML = arr_4.slice(0,3).join(',');
document.getElementById("n4").innerHTML = arr_4[0];
document.getElementById("n5").innerHTML = arr_4.slice(1,3).join(',');
arr_4.push("orange"); document.getElementById("n6").innerHTML = arr_4.join(',');


// q-2
let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], plus = 0;
sum.forEach(x => { plus += x; }); document.getElementById("sum").innerHTML = "sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] = " + plus;


// q-3
let array = [28, 45, 69, 20, 15, 7, 98];
let min = array[0], max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
}
document.getElementById('min-max').innerHTML = "maximum number: " + max + "<br>" + "minimum number: " + min;


// qu-4
var arr_1 = ['a', 'b', 'c', 'd'];
let asciiArray = [];
for (let i = 0; i < arr_1.length; i++) {
    let asciiValue = arr_1[i].charCodeAt(0);
    asciiArray.push(asciiValue);
    document.getElementById('asqi').innerHTML += asciiValue + ",";
}


// q-5
let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
const result = numbers.filter((word) => word > 0); document.getElementById("re-naga").innerHTML = " numbers  = [" + result + "]";


// qu-6
let arr_2 = [2, 5, 6, 3, 8, 9];
const squer = arr_2.map((x) => x * x); document.getElementById("squer").innerHTML = "arr_2 = [" + squer + "]";


// qu-7
let arr_3 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
//  ascending order
arr_3.sort(function (a, b) {
    return a - b;
});
document.getElementById("asce").innerHTML = "ascending order arr_3 = [" + arr_3 + "]";
// descending order
arr_3.sort(function (a, b) {
    return b - a;
});
document.getElementById("desc").innerHTML = "descending order arr_3 = [" + arr_3 + "]";

let myColor_1 = ["Red", "Green", "White", "Black"];
// ascending order
myColor_1.sort(); document.getElementById("color-1").innerHTML = "ascending order myColor_1 = [" + myColor_1 + "]";
console.log(myColor_1); 
let myColor_2 = ["Red", "Green", "White", "Black"];
//descending order
myColor_2.sort((a, b) => {
    if (a > b) return -1; 
    if (b > a) return 1; 
    return 0;
});
document.getElementById("color-2").innerHTML = "descending order myColor_1 = [" + myColor_2 + "]";


// qu-8
let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filtWords = words.filter(word => word.length < 8); document.getElementById("filter").innerHTML = "words = [" + filtWords + "]";


//qu-9
let x1 = "airplane";    //output:- r
let x2 = x1.split(""); document.getElementById("r").innerHTML = x2[2];
let x3 = "oxoxoxox";  // output:- "oXoXoXoX"
let x4 = x3.replaceAll('x','X'); document.getElementById("x").innerHTML = " '' " + x4 + " '' ";
let x5 = "A New Java Book"; // output:-  "a new java book" , "A NEW JAVA BOOK"
let lower = x5.toLowerCase(); 
let upper = x5.toUpperCase(); 
let concat = lower + " , " + upper; document.getElementById("l-w-o").innerHTML = " '' " + concat + " '' ";


// 10
let reve = [1, 2, 3, 4, 5];
reve.reverse(); document.getElementById("revers").innerHTML ="revers reve = [" + reve + "]";


// 11
const value = [1, 2, 3, "cat","dog"];
document.getElementById("tru").innerHTML ="2 = " + value.includes(2);
document.getElementById("tru-1").innerHTML ="cat = " + value.includes('cat');
document.getElementById("fal").innerHTML ="orange = " + value.includes('orange');


// 12
let name_1 = "Nilesh Paradva";
let characters = name_1.split('');
let totalCharacters = characters.reduce((count, character) => count + 1, 0);
document.getElementById("name-1").innerHTML = name_1;
document.getElementById("ch-v").innerHTML = "Total number of characters = " + totalCharacters;


//13
let repl_1 = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.getElementById("replace").innerHTML = "replace dog to cat = " + repl_1.replaceAll("dog", "cat");


// 14
let input1 = "Hire the top 1% freelance developers";
let in_split = input1.split(" ");
console.log(in_split); console.log(in_split.pop()); console.log(in_split);
in_split.pop(); document.getElementById("str-a").innerHTML = "input1 = [" + in_split + "]";


// 15
let input2 = ['5', 32, 'Daniel'];
let out = input2.join(","); document.getElementById("arr-s").innerHTML = "input2 = " + out;