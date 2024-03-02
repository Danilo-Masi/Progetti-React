import React from 'react'

export default function SkeletonStockDetail() {
    return (
        <div className='w-full md:w-[calc(33.33%-0.85rem)] h-min flex flex-col rounded-md gap-3'>
            <div role="status" className="flex items-center justify-center h-[65svh] max-w-sm bg-gray-200 rounded-lg animate-pulse dark:bg-gray-700">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
