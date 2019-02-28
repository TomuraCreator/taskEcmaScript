'use strict';

let costs = [200, 550, 4000, 23, 58, 5000, 485, 711];
const bonus = 5;
const limBuy = 10000;
let index;
let sum = 0;
function sumOfValue() {
    console.log(`Let's rock! `);
    for (index of costs) {
        sum = sum + index;
    }
    if (sum > limBuy) {
        let buy = sum * (bonus * 0.01);
        let discount = sum + buy;
        console.log(`Цена ваших покупок: ${Math.round(discount)}.\n Ваш бонус составил: ${Math.round(buy)}.\n\n\n`);
    } else {
        console.log(`Цена ваших покупок: ${Math.round(sum)}.\n\n\n`);
    }
}
sumOfValue();