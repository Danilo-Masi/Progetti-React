import React from 'react';

function AddButton() {
    return (
        <button className='w-auto h-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
    );
}

export default function Stock({nome, simbolo}) {
    return (
        <div className='flex flex-row justify-between w-full p-3 rounded-md bg-gray-400'>
            <p>{nome}</p>
            <p>{simbolo}</p>
            <AddButton />
        </div>
    )
}
