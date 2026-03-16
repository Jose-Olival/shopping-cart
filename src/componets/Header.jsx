import { useState } from 'react'
import './header.css'

export function Header () {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1001)

  const handleChangeMinPrice = (event) => {
    setMinPrice(Number(event.target.value)) 
  }

  const handleChangeMaxPrice = (event) => {
    setMaxPrice(Number(event.target.value))
  }

  return (
    <header>
      <section className='filters'>
        <div>
          <label htmlFor='minPrice'>precio minimo</label>
          <input type='range' value={minPrice} id='minPrice' min='0' max={maxPrice} onChange={handleChangeMinPrice}/>
          <span>${minPrice}</span>
        </div>
        <div>
          <label htmlFor='maxPrice'>precio maximo</label>
          <input type='range' value={maxPrice} id='maxPrice' min={minPrice} max='1001' onChange={handleChangeMaxPrice}/>
          <span>${maxPrice === 1001 ? 'cualquiera': maxPrice}</span>
        </div>
        <div>
          <label htmlFor='category'>Categorias</label>
          <select id='category'> 
            <option value='all'>Todas</option>  
            <option value='beauty'>Belleza</option>    
            <option value='fragrances'>Perfumes</option>    
            <option value='furniture'>Muebles</option>    
            <option value='groceries'>Comida</option>                      
            </select>
        </div>
      </section>
    </header>
  )
}