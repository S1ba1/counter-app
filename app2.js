//the 0
const value = document.getElementById('value2');

//buttons here
const incBtn = document.getElementById('Rectangle_2');
const resBtn = document.getElementById('Rectangle_1');
const decBtn = document.getElementById('Rectangle_3');

//texts here
const incTxt = document.getElementById('increase');
const resTxt = document.getElementById('reset');
const decTxt = document.getElementById('decrease');


let count = 0;
//const value = document.querySelector('#value2');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.fill = '#33f29f';
        }
        if (count < 0) {
            value.style.fill = 'red';
        }
        if (count === 0 ) {
            value.style.fill = '#fff94d';
        }
        value.textContent = count;
    })
})


