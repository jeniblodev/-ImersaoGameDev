class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
      this.matriz = matriz;
      this.imagem = imagem;
      this.largura = largura;
      this.altura = altura;
      this.x = x;
      this.variacaoY = variacaoY;
      this.y = height - this.altura - this.variacaoY;
      this.larguraSprite = larguraSprite;
      this.alturaSprite = alturaSprite;
      this.invertida = false;
  
      this.frameAtual = 0;
    }
  
    exibe() {
      push();
      translate(this.x, this.y);
      if(this.invertida) {
        translate(this.largura, 0);
        scale(-1, 1);
      }
      image(this.imagem, 0, 0, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
      pop();
      this.anima();
    }
  
    anima() {
      this.frameAtual++;
  
      if(this.frameAtual >= this.matriz.length - 1) {
        this.frameAtual = 0;
      }
    }
  }