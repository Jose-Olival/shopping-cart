import { useId } from 'react'
import './header.css'
import { useFilter } from '../hooks/useFilter'

export function Header ( ) {
  const { filter, changeFilter } = useFilter()

  const minPriceFieldId = useId()
  const maxPriceFIeldId = useId()
  const categoryFieldId = useId()

  const handleChangeMinPrice = (event) => {
    changeFilter({key: 'minPrice', value: Number(event.target.value)}) 
  }

  const handleChangeMaxPrice = (event) => {
    changeFilter({key: 'maxPrice', value: Number(event.target.value)}) 
  }

  const handleChangeCategory = (event) => {
    changeFilter({key: 'category', value: event.target.value}) 
  }

  return (
    <header>
      <section className='filters'>
        <div>
          <label htmlFor={minPriceFieldId}>precio minimo</label>
          <input type='range' value={filter.minPrice} id={minPriceFieldId} min='0' max={filter.maxPrice} onChange={handleChangeMinPrice}/>
          <span>${filter.minPrice}</span>
        </div>
        <div>
          <label htmlFor={maxPriceFIeldId}>precio maximo</label>
          <input type='range' value={filter.maxPrice} id={maxPriceFIeldId} min={filter.minPrice} max='301' onChange={handleChangeMaxPrice}/>
          <span>${filter.maxPrice === 301 ? 'cualquiera': filter.maxPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFieldId}>Categorias</label>
          <select id={categoryFieldId} value={filter.category} onChange={handleChangeCategory}> 
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