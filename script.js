const  h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues)


function sumarInputValues(event){
    event.preventDefault();
    const sumar = parseInt(numero1.value) + parseInt(numero2.value);
    pResult.innerHTML = "Resultado : " + sumar;
    
}

