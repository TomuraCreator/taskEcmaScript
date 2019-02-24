'use strict';

const bonus = 0.05;
let limitSum = 10000;

let item = document.querySelectorAll("div .item");
let sum_total = document.querySelector(".total p");
let button = document.querySelector(".button");

    function discount() {
        let text1 =  document.querySelector(".wrapper .text_1").value;
        let text2 =  document.querySelector(".wrapper .text_2").value;
        let text3 =  document.querySelector(".wrapper .text_3").value;
        let text4 =  document.querySelector(".wrapper .text_4").value;
        let t1 = parseInt(text1),
            t2 = parseInt(text2),
            t3 = parseInt(text3),
            t4 = parseInt(text4);
        let sum = t1 + t2 + t3 + t4;
        if (sum > limitSum) {
            let j = sum - (sum * bonus);
            let jet = Math.round(j);
            return sum_total.innerHTML = `Сумма вашего заказа с учетом скидки 5%: ${jet}.`;
        } else {
            return sum_total.innerHTML = `Сумма вашего заказа: <span style="color: blueviolet">${sum}.</span>`;
        }
    }
button.onclick = discount;
