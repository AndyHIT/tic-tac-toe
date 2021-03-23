import Square from './square';

const Board = ({squares, onClick}) => {
  const renderSquare = (index) => {
    return (
      <Square value={squares[index]} onClick={() => onClick(index)} />
    )
  }
  return (
    <>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  )
}

export default Board;