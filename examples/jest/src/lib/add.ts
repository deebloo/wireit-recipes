export function add(...args: number[]) {
  let sum = 0;

  for (const num of args) {
    sum += num;
  }

  return sum;
}
