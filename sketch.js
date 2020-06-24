let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;
let cenario;
let somJogo;
let somPulo;
let somGameOver;
let personagem;
let inimigo;

const matrizPersonagem = [
  [0,0],
  [220,0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

function preload() {
  somJogo = loadSound('sons/trilha_jogo.mp3');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/game_over.mp3')
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  somJogo.loop();
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 150, 155, 189, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(40);
   
}

function keyPressed() {
  if(key === 'ArrowUp') {
    personagem.pula();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo)) {
    console.log('colidiu');
    somJogo.stop();
    somGameOver.play();
    image(imagemGameOver, 400, 300, 600, 113);
    noLoop();
  }
  
}
