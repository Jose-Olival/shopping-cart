import { useId, useState } from 'react'
import './header.css'

export function Header ( ) {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1001)

  const minPriceFieldId = useId()
  const maxPriceFIeldId = useId()
  const categoryFieldId = useId()

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
          <label htmlFor={minPriceFieldId}>precio minimo</label>
          <input type='range' value={minPrice} id={minPriceFieldId} min='0' max={maxPrice} onChange={handleChangeMinPrice}/>
          <span>${minPrice}</span>
        </div>
        <div>
          <label htmlFor={maxPriceFIeldId}>precio maximo</label>
          <input type='range' value={maxPrice} id={maxPriceFIeldId} min={minPrice} max='1001' onChange={handleChangeMaxPrice}/>
          <span>${maxPrice === 1001 ? 'cualquiera': maxPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFieldId}>Categorias</label>
          <select id={categoryFieldId}> 
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