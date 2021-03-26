const Square = ({value, onClick}) => {
  return (
    <button className='square-block' onClick={onClick} disabled={value !== null}>{value}</button>
  )
}

export default Square;