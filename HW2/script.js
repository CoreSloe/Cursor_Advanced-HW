let N = parseInt(prompt("Введіть число N:"));
while (isNaN(N) || !Number.isInteger(N)) {
  N = parseInt(prompt("Некоректне значення. Введіть ціле число N:"));
}

let M = parseInt(prompt("Введіть число M:"));
while (isNaN(M) || !Number.isInteger(M) || M <= N) {
  M = parseInt(
    prompt("Некоректне значення. Введіть ціле число M (більше за N):")
  );
}

const skipEven = confirm("Пропускати парні числа?");

let sum = 0;
for (let i = N; i <= M; i++) {
  if (skipEven && i % 2 === 0) {
    continue;
  }
  sum += i;
}

console.log(`Сума чисел від ${N} до ${M}: ${sum}`);
