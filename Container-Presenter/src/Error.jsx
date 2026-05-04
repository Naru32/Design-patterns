import React from 'react'

function Error({message,title}) {
  return (
   <div
      className={`flex flex-col items-center justify-center text-center gap-4`}
    >
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
        <span className="text-red-500 text-3xl font-bold">{title}!</span>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-lg text-gray-500 mt-1">{message}</p>
      </div>
    </div>
  )
}

export default Error