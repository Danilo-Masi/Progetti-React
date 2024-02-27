import React from 'react'

export default function StockDetailList({ children }) {
  return (
    <div className='w-full h-full md:h-min md:max-h-full flex flex-col md:flex-row md:flex-wrap gap-5 overflow-scroll items-start justify-start'>
      {children}
    </div>
  )
}
