import React from 'react';

export default function LoadingSpinner() {

    //Array di 6 elementi
    const loadingSpinners = Array.from({ length: 6 }, (_, index) => index);
  
    return (
      <div className='w-full h-3/4 flex flex-col gap-3'>
        {loadingSpinners.map((key) => (
          <div key={key} role="status" className="flex items-center justify-center h-16 max-w-sm bg-gray-400 rounded-lg animate-pulse dark:bg-gray-700">
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    );
  }
