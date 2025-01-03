function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6

// Solution 1: Type Assertion
const result3 = add(5, parseInt("3") as number);

// Solution 2: Type Guard
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

let num1: any = "10";
let num2: any = 4;

if(isNumber(num1) && isNumber(num2)){
    const result4 = subtract(num1, num2); // Correct way to use
}else{
    console.log("Not a Number");
}
// Solution 3: Using Template Literals
const result5 = `${5}3`; // Concatenates the string values, no error
console.log(result5); // Output: 53