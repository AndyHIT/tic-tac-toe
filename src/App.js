import { useState } from 'react';
import './App.scss';
import Board from './components/board';

const App = () => {
  const initialSquares = Array(9).fill(null);

  const winningCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 5, 7],
    [3, 4, 5],
    [6, 7, 8]
  ]

  const [squares, setSquares] = useState(initialSquares);
  const [nextPlayer, setNextPlayer] = useState('X');

  const onClick = (i) => {
    const nextPlayerState = nextPlayer === 'X' ? 'O' : 'X'
    setNextPlayer(nextPlayerState);
    setSquares([...squares.slice(0, i), nextPlayer, ...squares.slice(i+1, 9)]);
  }

  return (
    <div className="App">
      <div className='players-turn'>Next player: {nextPlayer}</div>
      <Board squares={squares} onClick={i => onClick(i)} />
    </div>
  );
}

export default App;
