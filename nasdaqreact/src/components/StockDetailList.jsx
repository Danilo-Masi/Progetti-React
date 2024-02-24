import React from 'react'

export default function StockDetailList({ children }) {
  return (
    <div className='w-full h-full md:h-min md:max-h-full flex flex-col md:flex-row md:flex-wrap gap-3 overflow-scrol items-start justify-start'>
      {children}
    </div>
  )
}
