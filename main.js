var solutions = ['images/img1.png'];

var titles = ['FizzBuzz Problem']

function problem(data,num)
{
    localStorage.clear();
    localStorage.setItem('pickedProb', data);
    localStorage.setItem('pickedNum', num);
}

let pickedItem = localStorage.getItem('pickedProb');
let pickedNumber = localStorage.getItem('pickedNum');

console.log(pickedItem , pickedNumber);