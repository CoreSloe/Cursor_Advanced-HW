function* createIdGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const idGenerator = createIdGenerator();
console.log(`Завдання 1:`);
console.log(idGenerator.next().value); // 1
console.log(idGenerator.next().value); // 2
console.log(idGenerator.next().value); // 3
// і так далі будуть генеруватись нескінченні ідентифікатори

/* * */
function* newFontGenerator(startingSize) {
  let fontSize = startingSize;

  while (true) {
    const action = yield fontSize;
    if (action === "up") {
      fontSize += 2;
    } else if (action === "down") {
      fontSize -= 2;
    }
  }
}

const fontGenerator = newFontGenerator(14);

const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const textToChange = document.getElementById("textToChange");

increaseButton.addEventListener("click", () => {
  const { value } = fontGenerator.next("up");
  textToChange.style.fontSize = `${value}px`;
  console.log(`Розмір тексту: ${value}px`);
});

decreaseButton.addEventListener("click", () => {
  const { value } = fontGenerator.next("down");
  textToChange.style.fontSize = `${value}px`;
  console.log(`Розмір тексту: ${value}px`);
});
