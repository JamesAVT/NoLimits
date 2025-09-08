const img = document.querySelector('.avatar'); // Seleciona el primer elemento con la clase "avatar" y lo guarda en la variable img

img.addEventListener('click', () => { // Cuando se haga click en la imagen
    img.classList.add('backflip'); // Agrega la clase backflip que activa la animación

    img.addEventListener('animationend', () => { // Cuando la animación termine
        img.classList.remove('backflip'); // Quita la clase backflip para poder repetir la animación nuevamente
    }, { once: true}); // El listener de animationed se ejecuta solo una vez y luego se elimina automáticamente
});
