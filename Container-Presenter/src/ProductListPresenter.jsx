import React from 'react'
import Loader from './Loader'
import Error from './Error'
import ProductCard from './ProductCard'

function ProductListPresenter({loading,error,productList}) {
   if(loading){
    return(<>
    <Loader />
    </>)
   } 

   if(error){
    return(<>
        <Error 
        title='Error'
        message='Oops! Something broke'
        />
    </>)
   }
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
        {
            productList.map(product=> (<ProductCard product={product}/>))
        }
    </div>
  )
}

export default ProductListPresenter