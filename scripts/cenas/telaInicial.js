class TelaInicial {
    constructor(){

    }


    draw() {
        this._imagemFundo();
        this._imagemInicio();
        this._titulo();
        this._texto();
        this._botao();
        this._comoJogar();
        this._criado();
    }

    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _imagemInicio() {
        image(imagemInicio, 130, 90 )
    }

    _titulo() {
        textFont(fonte);
        textSize(70);
        text('Hipsta e os Misterios da Floresta', 240, 120);
        
    }

    _texto() {
        textFont(fonte);
        textSize(25);
        text('hipsta foi escolhida para defender e proteger a', 680, 200);
        text('floresta e este sempre foi um trabalho traquilo - mas', 650, 230);
        text('recentemente acontecimentos assustadores mexeram', 660, 260);
        text('com a tranquilidade de todos', 760, 290);
        
        text('para salvar a floresta hipsta precisa da sua ajuda', 670, 350);

        text('ajude a hispta a coletar o maior numero de', 700, 410);
        text('pontos de sabedoria iluminados pela floresta e tenha', 655, 440);
        text('muito cuidado com os trolls e suas gotinhas envenenadas!', 640, 470);
        
    }

    _comoJogar() {
        textFont(fonte);
        textSize(20);
        text('como jogar', 1000, 550);
        text('aperte w para pular', 1000, 580);
        text('aperte x para silenciar a musica de fundo', 1000, 600);
    }

    _criado() {
        textFont(fonte);
        textSize(25);
        text('jogo criado durante a #imersaogamedev da alura', 450, 650);
    }

    _botao() {
        botao.y = 535;
        botao.draw();
    }
}