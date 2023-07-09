function generateBlocks() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "250px"; // Розмір контейнера відповідає 5 квадратам у ряд
  container.style.margin = "0 auto";

  const squares = [];

  // Створення 25 квадратів та додавання їх до контейнера
  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div");
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.border = "1px solid #FFF";
    container.appendChild(square);
    squares.push(square);
  }

  // Функція для генерації випадкового кольору та зміни кольору квадратів
  function changeColors() {
    squares.forEach((square) => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      square.style.backgroundColor = randomColor;
    });
  }

  // Виклик функції changeColors кожну секунду
  setInterval(changeColors, 1000);

  document.body.appendChild(container);
}

function generateBlocksInterval() {
  generateBlocks();
}

generateBlocksInterval();
