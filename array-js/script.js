// ...........Array
var myMob = ["vivo", "samsung", "oppo", "tecno", "realme", "redmi", "nokia", "apple"];
console.log(myMob);
// ..............Array-functions
// 1......array-pop (deleted last element of an array)
var retPop = myMob.pop();
console.log(myMob);
// pop-repeated-value (repeated deleted element)
console.log(retPop);

// 2......array-push (add an last element in an array)
var retPush = myMob.push("iphone");
console.log(myMob);

// push-repeated-value (repeated: length of an array)
console.log(retPush);

// 3......array-shift (deleted 1st element of an array)
var retShift = myMob.shift();
console.log(myMob);

// shift-repeated-value (repeated deleted element)
console.log(retShift);

// 4 ........................array-unshift (add 1st element in an array)
var retUnshift = myMob.unshift("huawie");
console.log(myMob);

// unshift-repeated-value (repeated: length of an array)
console.log(retUnshift);


//5.................array-reverse (reverse element of an array)
console.log(myMob);
var reverseVal = myMob.reverse();
console.log(reverseVal);

//6...........array-splice (para1: start with in ex no 1, para1: delete 2 count no , para3: add a string which name is infinix)
var retSplice = myMob.splice(1, 2, "infinix");
console.log(myMob);

// splice-repeated-value (repeated those element wich are deleted from an array)
console.log(retSplice);