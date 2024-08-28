import React from 'react'

export const Pagination = ({totalPosts,postsPerPage}) => {

    const [page, nbPages] = useGlobal

  return (
    <>
            <div className='text-white'>
                <button onClick={()=>getPrevPage()} >PREV</button>
                <p>
                    {page} of {nbPages}
                </p>
                <button onClick={()=>getNextPage()} ></button>
            </div>
    
    </>
  )
}
