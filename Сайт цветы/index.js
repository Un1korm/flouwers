const dli = document.querySelector ('.dlin');
const shi = document.querySelector ('.shir');
const button1 = document.querySelector ('.test');

const itog1 = document.getElementById("itog");

button1.addEventListener('click', convert);

function convert(event) {
    const itog1 = (dli.value * shi.value)* 5;
    itog.innerHTML = itog1 + ' литров';
}