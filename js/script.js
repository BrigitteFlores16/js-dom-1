const lampadina = document.getElementById('image-lampadina1');
const toggleButton = document.getElementById('button-accendi1');

let isAccesa = false;

toggleButton.addEventListener('click', function () {
    if (isAccesa) {
        lampadina.src = './img/white_lamp.png'; 
        toggleButton.textContent = 'Accendi';
    } else {
        lampadina.src = './img/yellow_lamp.png'; 
        toggleButton.textContent = 'Spegni';
    }
    isAccesa = !isAccesa;
});
