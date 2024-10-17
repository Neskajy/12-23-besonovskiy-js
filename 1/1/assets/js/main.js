"use strict"

const btn = document.querySelector('.btn');

let max, min,
    maxTop, minTop,
    maxLeft, minLeft;

[max, min] = [255, 0];
[maxTop, minTop] = [80, 20];
[maxLeft, minLeft] = [80, 20];



btn.addEventListener('click', (e) => {
    let color = `rgba(${Math.random() * (max - min) + min}, ${Math.random() * (max - min) + min}, ${Math.random() * (max - min) + min}, ${1})`;
    let top = `${Math.random() * (maxTop - minTop) + minTop}%`;
    let left = `${Math.random() * (maxLeft - minLeft) + minLeft}%`;
    document.body.style.background = `${color}`;
    btn.style.top = `${top}`;
    btn.style.left = `${left}`;
});

let x, y, z;

[x, y, z] = [1, 2, 3];

console.log(`${x} + ${y} = ${x + y}`);

console.log(x - y);

console.log(x * y);

console.log(x / y);

console.log(Math.cos(x) ** y);

console.log(x * 'a');

console.log('c' ** x);

console.log(String(x).repeat(y).repeat(y).repeat(y).repeat(y));

let result = confirm('прихлопнуть жука');

if (result === true) {
    alert('Есть пробитие')
}