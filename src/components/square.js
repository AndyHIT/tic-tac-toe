const Square = ({value, onClick}) => {
  return (
    <button className='square-block' onClick={onClick}>{value}</button>
  )
}

export default Square;