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
        image(imagemTrollDead, windowWidth/3, -120);
    }

    _titulo() {
        textFont(fonte);
        textSize(60);
        fill(0, 0, 0);
        text('o troll foi derrotado!!', windowWidth/1.52, windowHeight/1.5);
        text('voce venceu', windowWidth/1.7, windowHeight/1.2);
        
    }

    _criado() {
        textFont(fonte);
        textSize(25);
        text('jogo criado durante a #imersaogamedev da alura', windowWidth-20, windowHeight-10);
    }

}