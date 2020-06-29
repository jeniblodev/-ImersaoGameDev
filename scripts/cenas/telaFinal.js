class TelaFinal {
    constructor(){

    }


    draw() {
        this._imagemFundo();
        this._titulo();
        this._imagemInicio();
        this._criado();
        
        
    }

    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _imagemInicio() {
        image(imagemTrollDead, 350, -180);
    }

    _titulo() {
        textFont(fonte);
        textSize(60);
        text('o troll foi derrotado!!', 900, 450);
        text('voce venceu', 770, 560);
        
    }

    _criado() {
        textFont(fonte);
        textSize(25);
        text('jogo criado durante a #imersaogamedev da alura', 880, 650);
    }

}