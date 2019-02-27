'use strict';

let costs = [200, 550, 4000, 23, 58, 5000, 485, 711];
const bonus = 5;
const limBuy = 10000;

window.onload = function () {
    console.log(`Let's rock! `);
    for (let index of costs) {
        let sum = index + index + index;
        if (sum > limBuy) {
            let buy = sum * (bonus * 0.01);
            let discount = sum - buy;
            console.log(`Цена ваших покупок: ${discount}руб.\n Ваша скидка составила: ${buy}руб.\n\n\n`);
        } else {
            console.log(`Цена ваших покупок: ${sum}руб.\n\n\n`);
        }
    }
};

