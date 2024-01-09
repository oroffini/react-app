import {Input} from "./components/forms/input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'Headphones' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'Headphones' },
  { category: 'Clothing', price: '$29.99', stocked: true, name: 'T-Shirt' },
]

function App() {
  return <div className="container">
    <SearchBar />
    <ProductTable products={PRODUCTS} />
  </div>

}

function SearchBar () {
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null} placeholder="Rechercher..." />
      <Checkbox id="stocked" checked={false} onChange={() => null} label="N'afficher que les produits en stock" />
    </div>
    </div>
}

function ProductTable ({products}) {
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App
