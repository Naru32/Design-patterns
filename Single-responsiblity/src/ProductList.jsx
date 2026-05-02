import React, { useState } from 'react'
import { debounce } from './utils/useDebounce';

function ProductList() {

const [searchTerm,setSearch] = useState('')

function searchProduct(search){
   setSearch(search) 
}


const debounced = debounce(searchProduct,1000)

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 100,
  category: ["Electronics", "Clothing", "Home", "Sports"][i % 4],
}));

console.log(searchTerm);

  return (
    <>
     <h1>Products</h1>
    <input type="text" placeholder='Search product' style={{position:'relative', marginBottom:'20px', padding:'5px'}} onChange={(e)=> debounced(e.target.value)}/>
    <section style={{display:'flex', flexWrap:'wrap', gap:'3px', justifyContent:'center'}}>
        {
            products.map(product=> (<div style={{backgroundColor:'teal', height:'200px', width:'200px',borderRadius:'12px',padding:'2px'}} key={product.id}>
                <h1 style={{color:'white'}}>{product.name}</h1>
                <p style={{textAlign:'center', color:'wheat'}}>{product.category}</p>
                <h3 style={{color:'floralwhite'}}>{product.price}</h3>
            </div>))
        }
    </section>
    </>
  )
}

export default ProductList