import { products as initialProducts } from './mocks/products.json'

export function useFilter ({ products }) {
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: -1
  })

  const changeFilter = ({key, value}) => {

  }

  const productsFilter = (products) => {
    return products.filter((product) => {
      return filter.minPrice <= product.price &&
      (filter.maxPrice === -1 || filter.maxPrice >= product.price ) &&
      (filter.category === 'all' || filter.category === product.category )
    })
  }

  const filteredProducts = productsFilter(products)

  return { products: filteredProducts, changeFilter}
}