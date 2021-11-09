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

    update() {
        
    }

    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _imagemInicio() {
        image(imagemInicio, windowWidth/8, windowHeight/5.5 )
    }

    _titulo() {
        textFont(fonte);
        textSize(70);
        text('Hipsta e os Misterios da Floresta', windowWidth/4.2, 120);
        
    }

    _texto() {
        textFont(fonte);
        textSize(25);
        text('hipsta foi escolhida para defender e proteger a', windowWidth/1.8, 230);
        text('floresta e este sempre foi um trabalho traquilo - mas', windowWidth/1.8, 260);
        text('recentemente acontecimentos assustadores mexeram', windowWidth/1.8, 290);
        text('com a tranquilidade de todos', windowWidth/1.8, 320);
        
        text('para salvar a floresta hipsta precisa da sua ajuda', windowWidth/1.8, 380);

        text('ajude a hispta a coletar o maior numero de', windowWidth/1.8, 430);
        text('pontos de sabedoria iluminados pela floresta e tenha', windowWidth/1.8, 460);
        text('muito cuidado com os trolls e suas gotinhas envenenadas!', windowWidth/1.8, 490);
        text('-aproveite as doses de elixir para recuperar sua vida-', windowWidth/1.78, 520);
        
    }

    _comoJogar() {
        textFont(fonte);
        textSize(20);
        text('como jogar', windowWidth/9, windowHeight/1.2);
        text('aperte w para pular (duas vezes para pulo duplo)', windowWidth/8, windowHeight/1.16);
        text('aperte x para silenciar a musica de fundo', windowWidth/8, windowHeight/1.13);
    }

    _criado() {
        textFont(fonte);
        textSize(25);
        text('jogo criado durante a #imersaogamedev da alura', windowWidth/1.6, windowHeight-10);
    }

    _botao() {
        botao.y = windowHeight/1.2;
        botao.draw();
    }
}