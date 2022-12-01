import React from 'react'
import Stories from './Stories'
import InpuBox from './InputBox'
import Posts from './Posts'

function Feed({posts}) {
    return (
        <div className='flex-grow h-screen pb-44 pt-4 mr-2 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stories />

                <InpuBox />
                <Posts posts={posts}/>
            </div>

        </div>
    )
}

export default Feed