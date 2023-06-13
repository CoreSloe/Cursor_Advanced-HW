const N = parseInt(prompt("Введіть число N:"));
const M = parseInt(prompt("Введіть число M:"));
const skipPair = confirm("Пропускати парні числа?");

let sum = 0;
for (let i = N; i <= M; i++) {
  if (skipPair && i % 2 === 0) {
    continue;
  }
  sum += i;
}

console.log(`Сума чисел від ${N} до ${M}: ${sum}`);
