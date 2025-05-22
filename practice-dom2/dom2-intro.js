let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom(){
    let l = document.createElement('li');
    let u = document.querySelector('ul#kazoeuta');
    l.textContent = 'ヨット';
    u.insertAdjacentElement('beforeend', l);

    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let a = document.createElement('a');
    let p = document.querySelector('p#takudai') ;
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    p.insertAdjacentElement('afterend', a);

    u = document.querySelector('ul#kassen');
    u.remove();

    u = document.createElement('ul');
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);

    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
}