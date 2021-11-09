class Botao {
    constructor(texto, x, y) {
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.botao = createButton(this.texto);
        this.botao.addClass('botao');
    }

    draw() {
        this.botao.position(this.x, this.y);
        this.botao.center('horizontal');
        this.botao.mousePressed(() => this._alteraCena())
    }

    _alteraCena() {
        this.botao.remove();
        cenaAtual = 'jogo'
        somJogo.loop();
        somAtivo = true;
    }
}