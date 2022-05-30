import React from 'react'

function Success(success) {
  return (
    <div>
       <div className="alert alert-success alert-dismissible fade show" role="alert">
                {success}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span> </button>
            </div>
    </div>
  )
}

export default Success