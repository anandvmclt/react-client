import React from 'react'

function Loader() {
    return (
        <div className='mt-5'> 
        <div className="spinner-border mt-5" role="status"
        style={{width:'150px', height:'150px'}} >
            <span className="sr-only">Loading...</span>
        </div>
        </div>
    )
}

export default Loader