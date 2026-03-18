import { useContext } from 'react'
import { FilterContext } from '../context/filter'

export function useFilter ( ) {
  const {filter, setFilter} = useContext(FilterContext)

  const changeFilter = ({key, value}) => {
    setFilter(prevFilter => {
      const newFilter = {...prevFilter}
      newFilter[key] = value
      return newFilter
    })
  }

  const productsFilter = (products) => {
    return products.filter((product) => {
      return filter.minPrice <= product.price &&
      filter.maxPrice >= product.price &&
      (filter.category === 'all' || filter.category === product.category )
    })
  }

  return { productsFilter, filter, changeFilter}
}