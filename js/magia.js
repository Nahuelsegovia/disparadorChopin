function mostrar() {

    /* teclados */
    let tecla1 = document.getElementById('uno');
    let tecla2 = document.getElementById('dos');
    let tecla3 = document.getElementById('tres');
    let tecla4 = document.getElementById('cuatro');
    let tecla5 = document.getElementById('cinco');
    let tecla6 = document.getElementById('seis');


    /* Audio */
    let audioChopin1 = document.getElementById('audioChopin1');
    let audioChopin2 = document.getElementById('audioChopin2');
    let audioChopin3 = document.getElementById('audioChopin3');
    let audioChopin4 = document.getElementById('audioChopin4');
    let audioChopin5 = document.getElementById('audioChopin5');
    let audioChopin6 = document.getElementById('audioChopin6');

    /* Estado de teclas */
    let estadoTecla1 = 0;
    let estadoTecla2 = 0;
    let estadoTecla3 = 0;
    let estadoTecla4 = 0;
    let estadoTecla5 = 0;
    let estadoTecla6 = 0;
    


    /* Eventos */


    /* Evento de tecla*/
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 49) {
            tecla1.style.background = 'white';
            tecla1.style.opacity = '0.4';
            tecla1.style.color = 'black';
            estadoTecla1++;
            audioChopin1.play();
            if(estadoTecla1 == 2){
            tecla1.style.background = 'black';
            tecla1.style.opacity = '0.6';
            tecla1.style.color = 'white';
            audioChopin1.src = './audio/chopin1.mp3';
            estadoTecla1 = 0;
            }
        }

        else if (event.keyCode === 50) {
            tecla2.style.background = 'white';
            tecla2.style.opacity = '0.4';
            tecla2.style.color = 'black';
            estadoTecla2++;
            audioChopin2.play();
            if(estadoTecla2 == 2){
            tecla2.style.background = 'black';
            tecla2.style.opacity = '0.6';
            tecla2.style.color = 'white';
            audioChopin2.src = './audio/chopin2.mp3';
            estadoTecla2 = 0;
            }
        }

        else if (event.keyCode === 51) {
            tecla3.style.background = 'white';
            tecla3.style.opacity = '0.4';
            tecla3.style.color = 'black';
            estadoTecla3++;
            audioChopin3.play();
            if(estadoTecla3 == 2){
            tecla3.style.background = 'black';
            tecla3.style.opacity = '0.6';
            tecla3.style.color = 'white';
            audioChopin3.src = './audio/chopin3.mp3';
            estadoTecla3 = 0;
            }
        }

        else if (event.keyCode === 52) {
            tecla4.style.background = 'white';
            tecla4.style.opacity = '0.4';
            tecla4.style.color = 'black';
            audioChopin4.play();
            estadoTecla4++;
            if(estadoTecla4 == 2){
            tecla4.style.background = 'black';
            tecla4.style.opacity = '0.6';
            tecla4.style.color = 'white';
            audioChopin4.src = './audio/chopin4.mp3';
            estadoTecla4 = 0;
            }
        }

        else if (event.keyCode === 53) {
            tecla5.style.background = 'white';
            tecla5.style.opacity = '0.4';
            tecla5.style.color = 'black';
            audioChopin5.play();
            estadoTecla5++;
            if(estadoTecla5 == 2){
            tecla5.style.background = 'black';
            tecla5.style.opacity = '0.6';
            tecla5.style.color = 'white';
            audioChopin5.src = './audio/chopin5.mp3';
            estadoTecla5 = 0;
            }
        }


        else if (event.keyCode === 54) {
            tecla6.style.background = 'white';
            tecla6.style.opacity = '0.4';
            tecla6.style.color = 'black';
            audioChopin6.play();
            estadoTecla6++;
            if(estadoTecla6 == 2){
            tecla6.style.background = 'black';
            tecla6.style.opacity = '0.6';
            tecla6.style.color = 'white';
            audioChopin6.src = './audio/chopin6.mp3';
            estadoTecla6 = 0;
            }
        }

        console.log(event.keyCode);
    });


/* Eventos de click */
    tecla1.addEventListener('click', function(e){
        e.preventDefault();
        tecla1.style.background = 'white';
            tecla1.style.opacity = '0.4';
            tecla1.style.color = 'black';
            audioChopin1.play();
            estadoTecla1++;
            if(estadoTecla1 == 2){
            tecla1.style.background = 'black';
            tecla1.style.opacity = '0.6';
            tecla1.style.color = 'white';
            audioChopin1.src = './audio/chopin1.mp3';
            estadoTecla1 = 0;
            }
    })

    tecla2.addEventListener('click', function(e){
        e.preventDefault();
        tecla2.style.background = 'white';
            tecla2.style.opacity = '0.4';
            tecla2.style.color = 'black';
            audioChopin2.play();
            estadoTecla2++;
            if(estadoTecla2 == 2){
            tecla2.style.background = 'black';
            tecla2.style.opacity = '0.6';
            tecla2.style.color = 'white';
            audioChopin2.src = './audio/chopin2.mp3';
            estadoTecla2 = 0;
            }
    })


    tecla3.addEventListener('click', function(e){
        e.preventDefault();
        tecla3.style.background = 'white';
            tecla3.style.opacity = '0.4';
            tecla3.style.color = 'black';
            audioChopin3.play();
            estadoTecla3++;
            if(estadoTecla3 == 2){
            tecla3.style.background = 'black';
            tecla3.style.opacity = '0.6';
            tecla3.style.color = 'white';
            audioChopin3.src = './audio/chopin3.mp3';
            estadoTecla3 = 0;
            }
    })

    tecla4.addEventListener('click', function(e){
        e.preventDefault();
        tecla4.style.background = 'white';
            tecla4.style.opacity = '0.4';
            tecla4.style.color = 'black';
            audioChopin4.play();
            estadoTecla4++;
            if(estadoTecla4 == 2){
            tecla4.style.background = 'black';
            tecla4.style.opacity = '0.6';
            tecla4.style.color = 'white';
            audioChopin4.src = './audio/chopin4.mp3';
            estadoTecla4 = 0;
            }
    })

    tecla5.addEventListener('click', function(e){
        e.preventDefault();
        tecla5.style.background = 'white';
            tecla5.style.opacity = '0.4';
            tecla5.style.color = 'black';
            audioChopin5.play();
            estadoTecla5++;
            if(estadoTecla5 == 2){
            tecla5.style.background = 'black';
            tecla5.style.opacity = '0.6';
            tecla5.style.color = 'white';
            audioChopin5.src = './audio/chopin5.mp3';
            estadoTecla5 = 0;
            }
    })


    tecla6.addEventListener('click', function(e){
        e.preventDefault();
        tecla6.style.background = 'white';
            tecla6.style.opacity = '0.4';
            tecla6.style.color = 'black';
            audioChopin6.play();
            estadoTecla6++;
            if(estadoTecla6 == 2){
            tecla6.style.background = 'black';
            tecla6.style.opacity = '0.6';
            tecla6.style.color = 'white';
            audioChopin6.src = './audio/chopin6.mp3';
            estadoTecla6 = 0;
            }
    })
}

mostrar();