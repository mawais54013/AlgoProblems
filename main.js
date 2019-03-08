var solutions = ['images/img1.png'];

var titles = ['FizzBuzz Problem'];

var time = ['O(n)'];

function problem(data,num)
{
    localStorage.clear();
    localStorage.setItem('pickedProb', data);
    localStorage.setItem('pickedNum', num);
}

let pickedItem = localStorage.getItem('pickedProb');
let pickedNumber = localStorage.getItem('pickedNum');

// console.log(pickedItem , pickedNumber);

let mainTitle = '';
let number = '';
let fixPic = '';

$("#button1").click(function(){
    for(let i = 0; i <= solutions.length; i++)
    {
        if(i == pickedNumber)
        {
            fixPic = solutions[i];
            number = time[i];
            mainTitle = titles[i];
        }
    }
    
    $('#mainContent').append(`
        <div class="row">
            <div class="col-lg-12 text-center">
                <img src="${fixPic}">
                <h1>${mainTitle}</h1>
                <p>${number}</p>
            </div>
        </div>
    `);
});



