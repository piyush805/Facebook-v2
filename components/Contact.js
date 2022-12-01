import Image from 'next/image'
import React from 'react'

function Contact({ src, name }) {
    return (
        <div className='flex items-center space-x-3 mt-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            
            <Image
                className='rounded-full h-12 w-12 object-cover'
                objectFit='cover'
                layout='fixed'
                width={50}
                height={50}
                src={src}
                priority
            />
            
            <p>{name}</p>
            <div className='absolute top-2 left-9 bg-lime-400 h-4 w-4 rounded-full '></div>

        </div>
    )
}

export default Contact