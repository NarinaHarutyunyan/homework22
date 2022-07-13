
// 1. Ստեղծում եք մի քանի ֆունկցիա, օբյեկտ, զանգված, ու պարապում եք դեբագրով, պետք ա կոդը նենց ստեղծեք, որ սխալ լինի մեջը ու սխալը գտնեք դեբագեռով

//ստեղծում եք spread operator-ի նման ֆունկցիա, որը կվերցնի զանգվածներ ու կսփրի ինչ-որ այլ զանգվածի մեջ
//...1...
"use strict";
debugger;
 function mySpread(arr1, arr2){
    const newArray = arr1.concat(arr2);
    console.log(newArray);
 }
 mySpread( [ 1000, 1200], [ 2600, 1500]); 

//...2...
const spread = (m, n)=>{
    for(let i = 0; i < n.length; i++){
        m.push( n[i]);
    }
    return m;
};
console.log(spread ([88, 66, 3], [97, 47, 5]));

//..3...
function newArr(array1, array2,array3){
    array3.push(array1, array2);
    console.log(array3);
}
newArr([ 10, 20, 30], [ 50, 60, 70], []);









