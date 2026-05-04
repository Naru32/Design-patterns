import React from 'react'

function ProductCard({product}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 border border-gray-100 group" key={product.id}>
      <div className="w-full h-40 bg-gray-100 rounded-xl overflow-hidden mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-md font-semibold text-gray-800">
          {product.name}
        </h2>

        {product.price && (
          <p className="text-blue-600 font-bold">₹{product.price}</p>
        )}

        <button
          className="mt-2 w-full py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard