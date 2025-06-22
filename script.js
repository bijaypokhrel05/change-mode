const heading = document.querySelector('h1');
const btn = document.querySelector('#change-mode');
const para1 = document.querySelector('#first');
const para2 = document.querySelector('#second');

const window1 = document.querySelector('.window');


btn.addEventListener('click', (e)=> {
    if (btn.style.backgroundColor == 'white') {
        window1.style.backgroundColor = 'white';
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        para1.style.color = 'black';
        para2.style.color = 'black';
        heading.style.color = 'black';
    } else {
        window1.style.backgroundColor = 'black';
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        para1.style.color = 'white';
        para2.style.color = 'white';
        heading.style.color = 'white';
    }
})
