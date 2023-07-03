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

const salary = 2000;

const taxesInUkraine = getMyTaxes.call(ukraine, salary);
console.log(taxesInUkraine);

// 2

function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
const middleTaxesInUkraine = getMiddleTaxes.call(ukraine);
const middleTaxesInLatvia = getMiddleTaxes.call(latvia);
const middleTaxesInLitva = getMiddleTaxes.call(litva);

console.log(middleTaxesInUkraine);
console.log(middleTaxesInLatvia);
console.log(middleTaxesInLitva);

// 3

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
const totalTaxesInUkraine = getTotalTaxes.call(ukraine);
const totalTaxesInLatvia = getTotalTaxes.call(latvia);
const totalTaxesInLitva = getTotalTaxes.call(litva);

console.log(totalTaxesInUkraine);
console.log(totalTaxesInLatvia);
console.log(totalTaxesInLitva);

// 4

function getMySalary(country) {
  const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500; // Генеруємо випадкову зарплату в діапазоні від 1500 до 2000
  const taxes = country.tax * salary;
  const profit = salary - taxes;

  const salaryInfo = {
    salary: salary,
    taxes: taxes,
    profit: profit,
  };

  console.log(salaryInfo);

  setTimeout(getMySalary.bind(null, country), 10000);
}

getMySalary(ukraine);
