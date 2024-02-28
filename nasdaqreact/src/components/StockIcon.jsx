import React from 'react'

export default function StockIcon({ width, height, immagine, simbolo }) {
  return (
    <img
      className={`${width} ${height} p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500`}
      src={immagine}
      alt={simbolo} />
  )
}
