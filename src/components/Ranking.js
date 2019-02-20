import React from 'react'

const Ranking = () => {
    // RECUPERAR JOGADORES DO LOCAL STORAGE
    let players = JSON.parse(localStorage.getItem('players'))
    
    // ADICIONA UM JOGADOR TEMPORARIO AO PLACAR SEM JOGADORES
    if(players === null){
        players = [{
            name: ' ', score: ' '
        }]
    }
    return (
        <div className="container">
            <h1 className="text-center ">StarQuiz!</h1>
            <h3 className="text-center mt-2">Ranking das Estrelas</h3>
            {players !== null &&
                <div className="table-wrapper-scroll-y mt-3 mb-5">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Pontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players
                                .sort(function (a, b) {
                                    return b.score - a.score
                                })
                                .map((player, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{player.name}</td>
                                        <td>{player.score}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Ranking