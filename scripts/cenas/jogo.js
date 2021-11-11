class Jogo {
  constructor() {}

  setup() {
    cenario = new Cenario(
      [
        imagemCenario_1,
        imagemCenario_2,
        imagemCenario_3,
        imagemCenario_4,
        imagemCenario_5,
      ],
      3
    );
    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      150,
      276,
      170,
      207,
      220,
      270
    );
    inimigo = new Inimigo(
      matrizInimigo,
      imagemInimigo,
      width - 52,
      70,
      82,
      82,
      108,
      108,
      12,
      200
    );
    inimigoTroll = new Inimigo(
      matrizInimigoTroll,
      imagemInimigoTroll,
      2 * width,
      30,
      260,
      260,
      400,
      400,
      12,
      2500
    );
    inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      imagemInimigoVoador,
      width - 52,
      300,
      92,
      92,
      180,
      150,
      12,
      3000
    );
    lampada = new Pontos(
      matrizLampada,
      imagemLampada,
      width - 52,
      320,
      120,
      120,
      400,
      400,
      10,
      100
    );
    elixir = new Pontos(
      matrizElixir,
      imagemElixir,
      width - 52,
      480,
      50,
      55,
      360,
      399,
      7,
      7000
    );
    this.entidades = [
      cenario,
      personagem,
      inimigo,
      inimigoTroll,
      inimigoVoador,
      lampada,
      elixir,
    ];
    this.inimigos = [inimigo, inimigoTroll, inimigoVoador];

    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);
  }

  keyPressed(key) {
    if (key === "w") {
      personagem.pula();
    }

    if (key === "x") {
      ligaDesligaSom();
    }
  }

  update() {
    if (keyIsPressed) {
      if (keyIsDown(KEY_A)) {
        personagem.volta();
      } else if (keyIsDown(KEY_D)) {
        personagem.avanca();
      }
    } else {
      if (personagem.invertida) {
        personagem.avanca();
      }
    }

    for (const entidade of this.entidades) {
      entidade.move();
    }

    if (personagem.estaColidindo(elixir)) {
      vida.atualizaVida();
      elixir.reinicializa();
    }

    if (personagem.estaColidindo(lampada)) {
      pontuacao.adicionarPonto();
      lampada.reinicializa();
    }

    for (const entidade of this.inimigos) {
      if (personagem.estaColidindo(entidade)) {
        vida.perdeVida();
        personagem.ficaInvencivel();
      }
    }

    if (vida.vidas <= 0) {
      somPerdeVida.stop();
      somJogo.stop();
      somGameOver.play();
      push();
      imageMode(CENTER);
      image(imagemGameOver, windowWidth / 2, windowHeight / 2, 650, 113);
      pop();
      noLoop();
    }
  }

  draw() {
    if (vida.vidas <= 0) {
      return;
    }

    for (const entidade of this.entidades) {
      entidade.exibe();
    }

    pontuacao.exibe();
    vida.draw();
    cenario.exibeGrama();
  }
}
