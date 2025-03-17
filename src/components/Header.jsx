import React from 'react'

const Header = () => {
  return (
    <div className='container-header'>
        <div className='container-header-top'>
            <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
            <input type="text" placeholder='Search Food...' />
        </div>
        <div className='container-header-bottom'>
            <button>All</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
        </div>
    </div>
  )
}

export default Header
