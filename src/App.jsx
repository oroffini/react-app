import {Input} from "./components/forms/input.jsx";
import {CheckData} from "./components/forms/CheckData.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {useState} from "react";

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Tennis' },
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Basket' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'Headphones' },
  { category: 'Electronics', price: '$99.99', stocked: false, name: 'MacBook' },
  { category: 'Clothing', price: '$29.99', stocked: true, name: 'T-Shirt' },
]

function App() {
  const [showOnlyStocked, setShowOnlyStocked] = useState(false)
  const [search, setSearch] = useState("")

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showOnlyStocked && !product.stocked) {
      return false
    }

    if (search && !product.name.includes(search)) {
      return false
    }
    return true
  })

  return <div className="container my-3">
    <SearchBar
      search={search}
      onSearchChange={setSearch}
      showOnlyStocked={showOnlyStocked}
      onStockedOnlyChange={setShowOnlyStocked} 
      />
    <ProductTable products={visibleProducts} />
  </div>

}

function SearchBar (onStockedOnlyChange, showOnlyStocked, search, onSearchChange) {
  return <div>
      <div className="mb-3">
        <Input value={search} onChange={onSearchChange} placeholder="Rechercher..." />
        <CheckData 
        id="stocked"
        checked={showOnlyStocked} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les produits en stock" />
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
