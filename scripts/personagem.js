class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
      super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

      this.yInicial = height - this.altura;
      this.y = this.yInicial;

      this.velocidadePulo = 0;
      this.gravidade = 3;

      this.qntPulos = 2;
    }
  
   pula() {
    if (this.qntPulos > 0) {
     this.velocidadePulo = -35;
     this.qntPulos--;
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

   estaColidindo(inimigo) {
    noFill();
    const precisao = .65
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura*precisao, 
      this.altura,      
      inimigo.x, 
      inimigo.y,
      inimigo.largura*precisao, 
      inimigo.altura*precisao,
      
    );

    return colisao;
    
   }
  }