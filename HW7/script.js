const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};

const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921,
};

const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114,
};

// 1

function getMyTaxes(salary) {
  return this.tax * salary;
}
const ukraine1 = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const salary = 2000;

const taxesInUkraine = getMyTaxes.call(ukraine1, salary);
console.log(taxesInUkraine); // Результат: 390.0 (при зарплаті 2000 і ставці податку 0.195)

// 2

function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
const ukraine2 = { tax: 0.195, middleSalary: 1789 };
const latvia2 = { tax: 0.25, middleSalary: 1586 };
const litva2 = { tax: 0.15, middleSalary: 1509 };

const middleTaxesInUkraine = getMiddleTaxes.call(ukraine2);
const middleTaxesInLatvia = getMiddleTaxes.call(latvia2);
const middleTaxesInLitva = getMiddleTaxes.call(litva2);

console.log(middleTaxesInUkraine);
console.log(middleTaxesInLatvia);
console.log(middleTaxesInLitva);

// 3

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
const ukraine3 = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia3 = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva3 = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const totalTaxesInUkraine = getTotalTaxes.call(ukraine3);
const totalTaxesInLatvia = getTotalTaxes.call(latvia3);
const totalTaxesInLitva = getTotalTaxes.call(litva3);

console.log(totalTaxesInUkraine);
console.log(totalTaxesInLatvia);
console.log(totalTaxesInLitva);

// 4

function getMySalary(country) {
  const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  const taxes = country.tax * salary;
  const profit = salary - taxes;

  const salaryInfo = {
    salary: salary,
    taxes: taxes,
    profit: profit,
  };

  console.log(salaryInfo);

  setTimeout(getMySalary.bind(null, country), 10000); // Викликаємо функцію знову через 10 секунд
}

getMySalary(ukraine);
