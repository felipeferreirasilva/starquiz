import React from 'react'

const About = () => {
    return (
        <div className="container mt-2 mb-4">
            <div className="jumbotron-fluid" style={style.jumbotron}>
                <h1><strong>About</strong></h1>
                <p className="lead mt-3">StarQuiz é um jogo onde você deve testar os seus conhecimentos sobre os personagens da franquia Star Wars.</p>
                <hr className="my-4" />
                <h3 className="mt-2">Como Jogar?</h3>
                <p>Ao iniciar o jogo, clique no botão advinhar e digite o nome do personagem na caixa, em seguida clique em OK para verificar se acertou ou errou.</p>
                <h3 className="mt-2">Tempo</h3>
                <p>Quando o jogo começar, você tera dois minutos para tentar advinhar o máximo de personagens que conseguir.</p>
                <h3 className="mt-2">Pontuação</h3>
                <p>Cada personagem que você acertar vale 10 pontos, se você clicar no cartão de detalhes do personagem essa pontuação vai para 5 pontos.</p>
                <h3 className="mt-2">Ranking</h3>
                <p>Após o fim do jogo, você pode verificar a sua pontuação e decidir se quer deixar registrado em nosso ranking de jogadores, para isso, basta preencher o formulário com seu nome e email.</p>
            </div>
        </div>
    )
}

const style = {
    jumbotron: {
        backgroundColor: 'none'
    }
}

export default About