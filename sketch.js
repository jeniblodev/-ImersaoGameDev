function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40); 
  jogo = new Jogo();
  telaInicial = new TelaInicial;
  telaFinal = new TelaFinal;
  jogo.setup();
  botao = new Botao('iniciar aventura', width / 2, height / 2);
  cenas = {
    jogo,
    telaInicial,
    telaFinal
  };

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].update();
  cenas[cenaAtual].draw();
}

