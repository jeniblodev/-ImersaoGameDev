class Jogo {
    constructor (){

    }

    setup() {
        cenario = new Cenario([imagemCenario_1, imagemCenario_2, imagemCenario_3, imagemCenario_4, imagemCenario_5], 3);
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 150, 276, 170, 207, 220, 270);
        inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 70, 82, 82, 108, 108, 12, 200);
        inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, 2*width, 30, 260, 260, 400, 400, 12, 2500);
        inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 300, 92, 92, 180, 150, 12, 3000);
        lampada = new Pontos(matrizLampada, imagemLampada, width - 52, 320, 120, 120, 400, 400, 10, 100);
        elixir = new Pontos(matrizElixir, imagemElixir, width - 52, 480, 50, 55, 360, 399, 7, 7000);
    }

    keyPressed(key) {
        if(key === 'w') {
            personagem.pula();
        }

        if(key === 'x') {
            ligaDesligaSom();
        }
    }

    update() {
        if(keyIsDown(KEY_A)) {
            personagem.volta();
        } else if(keyIsDown(KEY_D)) {
            personagem.avanca();
        }

        cenario.move();
        personagem.move();
        lampada.move();
        elixir.move();
        inimigo.move();
        inimigoTroll.move();
        inimigoVoador.move();

        
        if(personagem.marcaPonto(lampada)) {
            pontuacao.adicionarPonto();
            lampada.reinicializa();
        }

        
        if(personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.ficaInvencivel();
            
            if(vida.vidas === 0) {
                somPerdeVida.stop();
                somJogo.stop();
                somGameOver.play();
                image(imagemGameOver, 400, 300, 600, 113);
                noLoop();
            }
        }
  
        if(personagem.estaColidindo(inimigoTroll)) {
            vida.perdeVida();
            personagem.ficaInvencivel();
            
            if(vida.vidas === 0) {
                somPerdeVida.stop();
                somJogo.stop();
                somGameOver.play();
                image(imagemGameOver, windowWidth/3.5, 330, 650, 113);
                noLoop();
            }
        }

        if(personagem.estaColidindo(inimigoVoador)) {
            vida.perdeVida();
            personagem.ficaInvencivel();
            
            if(vida.vidas === 0) {
                somPerdeVida.stop();
                somJogo.stop();
                somGameOver.play();
                image(imagemGameOver, windowWidth/3.5, 330, 650, 113);
                noLoop();
            }
        }

        if(personagem.estaColidindo(elixir)) {
            vida.ganhaVida();
            elixir.reinicializa();
        }

    }

    draw() {

        cenario.exibe();
        pontuacao.exibe();
        vida.draw();
        personagem.exibe();
        lampada.exibe();
        elixir.exibe();
        inimigo.exibe();
        inimigoTroll.exibe();
        inimigoVoador.exibe();
        cenario.exibeGrama();

    }

}