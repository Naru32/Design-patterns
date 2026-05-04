import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductListPresenter from './ProductListPresenter'

function ProductListContainer() {
 
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

 async function getProducts(){
  try {
      setLoading(true)
      const res = await axios.get('http://localhost:3001/products') 
      setLoading(false)
      console.log(res.data);
      setProducts(res.data)
  } catch (error) {
    setLoading(false)
      setError(error)
  }
  }
  useEffect(()=>{
    getProducts()
  },[])

  return(<>
  <ProductListPresenter productList={products} loading={loading} error={error}/>
  </>)
}

export default ProductListContainer