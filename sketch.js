let imagemCenario;
let imagemPersonagem;
let cenario;
let somJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  somJogo.loop();

}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

//Cenário

class Cenario {
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }

  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;

    if(this.x1 < -width) {
      this.x1 = width;
    }

    if(this.x2 < -width) {
      this.x2 = width;
    }
  }
}

//Personagem

class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [
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
    ]

    this.frameAtual = 0;
  }

  exibe() {
    image(this.imagem, 0, height - 189, 155, 189, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);

    this.anima()
  }

  anima() {
    this.frameAtual++

    if(this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}