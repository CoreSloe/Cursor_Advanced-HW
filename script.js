let applePrice = 15.678;
let bananaPrice = 123.965;
let orangePrice = 90.2345;

console.log("Ціна яблука:", applePrice);
console.log("Ціна банана:", bananaPrice);
console.log("Ціна апельсина:", orangePrice);

let maxPrice = Math.max(applePrice, bananaPrice, orangePrice);
let minPrice = Math.min(applePrice, bananaPrice, orangePrice);

console.log("Максимальна ціна:", maxPrice);
console.log("Мінімальна ціна:", minPrice);

let totalPrice = applePrice + bananaPrice + orangePrice;
console.log("Загальна вартість товарів:", totalPrice);

let applePrice2 = Math.floor(applePrice);
let bananaPrice2 = Math.floor(bananaPrice);
let orangePrice2 = Math.floor(orangePrice);

let fullPrice = applePrice2 + bananaPrice2 + orangePrice2;
console.log("Загальна вартість товарів без копійок:", fullPrice);

let roundedTotalPrice = Math.round(Math.floor(fullPrice) / 100) * 100;
console.log(
  "Сума товарів, округлена до сотень в меншу сторону:",
  roundedTotalPrice
);

let priceIsEven = Math.floor(totalPrice);

let isEven = priceIsEven % 2 === 0;

console.log(
  "Чи є сума товарів (округлена в меншу сторону) парним числом?",
  isEven
);

let rest500 = 500 - totalPrice;
console.log("Cума решти, при оплаті всіх товарів (без округлення),:", rest500);

let averagePrice = totalPrice / 3;
let roundedAveragePrice = averagePrice.toFixed(2);
console.log("Середнє значення цін: " + roundedAveragePrice);

let randomSale = Math.round(Math.random() * 100);
console.log("Випадкову знижку:", randomSale, "%");

let discountedPrice = totalPrice - (totalPrice * randomSale) / 100;
let roundedDiscountedPrice = discountedPrice.toFixed(2);
console.log("Сума до оплати (з урахуванням знижки): " + roundedDiscountedPrice);

let costPrice = (applePrice + bananaPrice + orangePrice) / 2;
let profit = discountedPrice - costPrice;
let roundedProfit = profit.toFixed(2);

console.log("Чистий прибуток: " + roundedProfit);

let output = `Максимальна ціна: ${maxPrice} Мінімальна ціна: ${minPrice} Вартість всіх товарів: ${totalPrice} Загальна вартість товарів без копійок: ${fullPrice} Сума товарів, округлена до сотень в меншу сторону:
${roundedTotalPrice} Чи є сума товарів (округлена в меншу сторону) парним числом?: 
${isEven} Cума решти, при оплаті всіх товарів (без округлення),: ${rest500} Середнє значення цін: ${roundedAveragePrice} Випадкову знижку: ${randomSale}"%" Сума до оплати (з урахуванням знижки): ${roundedDiscountedPrice} Чистий прибуток: ${roundedProfit} `;

console.log(output);
