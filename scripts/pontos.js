class Pontos extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;

        this.velocidade = velocidade;
        this.delay = delay;
        this.x = width + this.delay;
    }

    move() {
        this.x -= this.velocidade;

        if(this.x < -this.largura - this.delay) {
            this.x = width;
        }
    }
}

class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textAlign(RIGHT);
        fill('#FFFFFF');
        textSize(50);
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto() {
        this.pontos += 0.4;
        somLamp.play();
        
            
    }

   
  
}