// И
// ИЛИ
// НЕ

console.log("%c&&", "color: #FFFF00; background-color: #5394EC; padding: 5px")

console.log(true && false);

console.log(true && true);

console.log(true && 'This string');

console.log(true && 'This string' && null);

if (true && 'This string') {
    console.log(1);

}

console.log("%c||", "color: #FFFF00; background-color: #5394EC; padding: 5px")

console.log(true || false);

console.log(true || 'This string');

console.log(null || 0 || 'This string');

console.log("%c!", "color: #FFFF00; background-color: #5394EC; padding: 5px")

console.log(!true);

console.log(!'string');

console.log(!'');


console.log("%c?", "color: #FFFF00; background-color: #5394EC; padding: 5px")

console.log(true ? 1 : 2);

console.log(true ? 1 : 2);

console.log(true ? 1 : false ? 2 : 3 > 4 ? true : false);

// const user = fetch('http://')

// const isTrue = user ? 'Yes' : 'No'

// alert(isTrue)

const randomNumber = Math.ceil(Math.random() + 100);

console.log(randomNumber);

// const block = document.querySelector('#parent input')
const $div = document.querySelector('.root')

const $table = document.createElement('table');

const $tr = document.createElement('tr');
const $th = document.createElement('th');

$th.innerText = 'user name';
$tr.appendChild($th)
$table.appendChild($tr)

$div.appendChild($table)