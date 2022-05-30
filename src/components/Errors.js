import React from 'react'

function Errors({ error }) {
    return (
        <div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {error}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span> </button>
            </div>

        </div>
    )
}

export default Errors