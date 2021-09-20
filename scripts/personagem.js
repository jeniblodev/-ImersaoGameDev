class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

      this.variacaoY = variacaoY;

      this.yInicial = height - this.variacaoY;
      this.y = this.yInicial;

      this.velocidadePulo = 0;
      this.gravidade = 3;

      this.qntPulos = 2;

      this.invencivel = false;
      this.estadoPiscando = 1;
      this.piscando = false;

    }
  
   pula() {
    if (this.qntPulos > 0) {
     this.velocidadePulo = -35;
     this.qntPulos--;
     somPulo.play();
    }
   }

   aplicaGravidade() {
    this.y += this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;

    if(this.y > this.yInicial) {
      this.y = this.yInicial;
      this.qntPulos = 2;
    }
   }

   move() {
     this.aplicaGravidade();
   }

   volta() {
    this.x -= 5;
    this.invertida = true;
   }

   avanca() {
    this.x += 5;
    this.invertida = false;
   }

   exibe() {
    if(this.piscando) {
      this.estadoPiscando += 1;
      if(this.estadoPiscando >= 3) {
        this.estadoPiscando = 1;
        return;
      }
    }
    super.exibe();
   }

   ficaInvencivel() {
      this.invencivel = true;
      this.piscando = true;
      setTimeout(() => {
        this.invencivel = false;
        this.piscando = false;
    }, 1000)
  }

   estaColidindo(inimigo) {
      if(this.invencivel) {
        return false;
      }

    const precisao = .6;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura*precisao, 
      this.altura*precisao,      
      inimigo.x, 
      inimigo.y,
      inimigo.largura*precisao, 
      inimigo.altura*precisao,      
    );

    return colisao;
    
   }
   

   marcaPonto(pontos) {
    const precisao = .6;
    const marcaPonto = collideRectRect(
      this.x, 
      this.y, 
      this.largura*precisao, 
      this.altura*precisao,      
      pontos.x, 
      pontos.y,
      pontos.largura*precisao, 
      pontos.altura*precisao,
      
    );

    return marcaPonto;
    
   }
  
}
  