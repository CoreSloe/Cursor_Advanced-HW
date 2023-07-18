function getRandomChinese(length) {
  return new Promise((resolve, reject) => {
    if (length <= 0) {
      reject(new Error("Length must be a positive number."));
      return;
    }

    let result = "";

    const generateCharacter = () => {
      const randomUnicode =
        Math.floor(Math.random() * (0xffff - 0x4e00 + 1)) + 0x4e00;
      result += String.fromCharCode(randomUnicode);

      if (result.length === length) {
        resolve(result);
      } else {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(length * 50 - elapsedTime, 0);
        setTimeout(generateCharacter, remainingTime);
      }
    };

    const startTime = Date.now();
    setTimeout(generateCharacter, 50);
  });
}

const length = 4;

getRandomChinese(length)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
