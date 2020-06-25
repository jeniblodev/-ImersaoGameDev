class Cenario {
    constructor(arrayImagem, velocidade){
      this.arrayImagem = arrayImagem;
      this.imagem = this.arrayImagem[0];
      this.velocidade = velocidade;
      this.velocidade2 = velocidade * 1.2;
      this.velocidade3 = velocidade * 0.8;
      this.velocidade4 = velocidade * 1.4;

      this.x1 = 0;
      this.x2 = width;

      this.x12 = 0;
      this.x22 = width;

      this.x13 = 0;
      this.x23 = width;

      this.x14 = 0;
      this.x24 = width;
    }
  
    exibe() {
      image(this.arrayImagem[3], this.x1, 0, width, height);
      image(this.arrayImagem[3], this.x2, 0, width, height);

      image(this.arrayImagem[0], this.x13, 0, width, height);
      image(this.arrayImagem[0], this.x23, 0, width, height);

      image(this.arrayImagem[2], this.x1, 0, width, height);
      image(this.arrayImagem[2], this.x2, 0, width, height);

      image(this.arrayImagem[1], this.x12, 0, width, height);
      image(this.arrayImagem[1], this.x22, 0, width, height);
    }

    exibeGrama() {
      image(this.arrayImagem[4], this.x14, 0, width, height);
      image(this.arrayImagem[4], this.x24, 0, width, height);
    }
  
    move() {
      this.x1 -= this.velocidade;
      this.x2 -= this.velocidade;

      this.x12 -= this.velocidade2;
      this.x22 -= this.velocidade2;

      this.x13 -= this.velocidade3;
      this.x23 -= this.velocidade3;

      this.x14 -= this.velocidade4;
      this.x24 -= this.velocidade4;
  
      if(this.x1 <= -width) {
        this.x1 = this.x2 + width;
      }
  
      if(this.x2 <= -width) {
        this.x2 = this.x1 + width;
      }

      if(this.x12 <= -width) {
        this.x12 = this.x22 + width;
      }

      if(this.x22 <= -width) {
        this.x22 = this.x12 + width;
      }

      if(this.x13 <= -width) {
        this.x13 = this.x23 + width;
      }

      if(this.x23 <= -width) {
        this.x23 = this.x13 + width;
      }

      if(this.x14 <= -width) {
        this.x14 = this.x24 + width;
      }

      if(this.x24 <= -width) {
        this.x24 = this.x14 + width;
      }
    }
  }

