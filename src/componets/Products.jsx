import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        />
                    <div>
                        <h3>{product.title}</h3> <p>${product.price}</p>
                    </div>
                    <button>
                        <AddToCartIcon/>
                    </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}