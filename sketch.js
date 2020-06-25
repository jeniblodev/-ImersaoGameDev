let imagemCenario_1;
let imagemCenario_2;
let imagemCenario_3;
let imagemCenario_4;
let imagemCenario_5;
let imagemPersonagem;
let imagemLampada;
let imagemInimigo;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;


let cenario;
let somJogo;
let somPulo;
let somLamp;
let somGameOver;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let lampada;
let pontuacao;



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

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const matrizLampada = [
[1648, 112],
[2127, 104],
[207, 568],
[662, 534],
[1143, 528],
[1615, 518],
[2079, 512],
[167, 990],
[640, 984],
[1112, 977],
[1583, 969],
[1583, 969],
];

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]


function preload() {
  somJogo = loadSound('sons/trilha_jogo.mp3');
  imagemCenario_1 = loadImage('imagens/cenario/bg01.png');
  imagemCenario_2 = loadImage('imagens/cenario/bg02.png');
  imagemCenario_3 = loadImage('imagens/cenario/bg03.png');
  imagemCenario_4 = loadImage('imagens/cenario/bg04.png');
  imagemCenario_5 = loadImage('imagens/cenario/bg05.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemLampada = loadImage('imagens/assets/lampada.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somLamp = loadSound('sons/coin.mp3');
  somGameOver = loadSound('sons/game_over.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  somJogo.loop();
  cenario = new Cenario([imagemCenario_1, imagemCenario_2, imagemCenario_3, imagemCenario_4, imagemCenario_5], 3);
  pontuacao = new Pontuacao();
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 150, 276, 170, 207, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 70, 82, 82, 110, 110, 10, 200);
  inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, 2*width, 30, 260, 260, 400, 400, 10, 2500);
  inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 300, 92, 92, 180, 150, 10, 3000);
  lampada = new Pontos(matrizLampada, imagemLampada, width - 52, 320, 120, 120, 400, 400, 8, 100);
  frameRate(40);
   
}

function keyPressed() {
  if(key === 'a') {
    personagem.pula();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  

  personagem.exibe();
  personagem.aplicaGravidade();

  lampada.exibe();
  lampada.move();

  inimigo.exibe();
  inimigo.move();
  inimigoTroll.exibe();
  inimigoTroll.move();

  inimigoVoador.exibe();
  inimigoVoador.move();

  cenario.exibeGrama();

  if(personagem.estaColidindo(inimigo)) {
    console.log('colidiu');
    somJogo.stop();
    somGameOver.play();
    image(imagemGameOver, 400, 300, 600, 113);
    noLoop();
    
  }
  
  if(personagem.estaColidindo(inimigoTroll)) {
    console.log('colidiu');
    somJogo.stop();
    somGameOver.play();
    image(imagemGameOver, 400, 300, 600, 113);
    noLoop();
  }

  if(personagem.estaColidindo(inimigoVoador)) {
    console.log('colidiu');
    somJogo.stop();
    somGameOver.play();
    image(imagemGameOver, 400, 300, 600, 113);
    noLoop();
  }

  let contador;
  contador = 0;

  if(personagem.marcaPonto(lampada)) {

    pontuacao.adicionarPonto();

    

  }
  
}

