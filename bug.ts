function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6

// Type 'string' is not assignable to type 'number'.
const result3 = add(5, "3");

// Type 'string' is not assignable to type 'number'.
const result4 = subtract("10", 4);