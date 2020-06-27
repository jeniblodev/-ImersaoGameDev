class Vida {
    constructor(total, inicial) {
        this.total = total;
        this.inicial = inicial;

        this.largura = 50;
        this.altura = 50;
    }

    draw() {
        image(imagemVida, 0, 0, this.altura, this.largura)
    }
}