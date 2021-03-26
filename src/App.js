import { useEffect, useState } from 'react';
import './App.scss';
import Board from './components/board';

const App = () => {
  const initialSquares = Array(9).fill(null);

  const [winner, setWinner] = useState(null);
  const [squares, setSquares] = useState(initialSquares);
  const [nextPlayer, setNextPlayer] = useState('X');

  useEffect(() => {
    if (claimWinner()) {
      setWinner(claimWinner());
    }
  }, [squares, winner]);
  
  const claimWinner = () => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i=0; i<winningCombination.length; i+=1) {
      const [a, b, c] = winningCombination[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const onClick = (i) => {
    const nextPlayerState = nextPlayer === 'X' ? 'O' : 'X'
    setNextPlayer(nextPlayerState);
    setSquares([...squares.slice(0, i), nextPlayer, ...squares.slice(i+1, 9)]);

    if (claimWinner() || squares[i]) {
      return;
    };
  }

  return (
    <div className="App">
      {!winner ? (<div className='players-turn'>Next player: {nextPlayer}</div>)
        : (winner !== null && winner === 'draw' ? (<div className='players-turn'>It's a draw</div>) 
          : (<div className='players-turn'>Winner is: {winner}</div>))
      }
      <Board squares={squares} onClick={i => onClick(i)} />
    </div>
  );
}

export default App;
