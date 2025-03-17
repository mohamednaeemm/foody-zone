import React from 'react'

const Dish = (props) => {
  return (
    <div className='dish'>
        <div className='dish-image'>
            <img src={props.image} alt={props.name} />
        </div>
        <div className='dish-info'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>{props.price}</button>
        </div>
    </div>
  )
}

export default Dish
