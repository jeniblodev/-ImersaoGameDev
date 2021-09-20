let somAtivo = false;

function ligaDesligaSom() {
    if(somAtivo) {
        somJogo.stop();
    } else {
        somJogo.loop();
    }
    somAtivo = !somAtivo;
}