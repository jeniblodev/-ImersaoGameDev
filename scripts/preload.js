function preload() {
    somJogo = loadSound('sons/trilha_jogo.mp3');
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
    imagemInicio = loadImage('imagens/personagem/gigHipsta.gif')
    imagemVida = loadImage('imagens/assets/coracao.png');
    fonte = loadFont('imagens/assets/fonteTelaInicial.otf');

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