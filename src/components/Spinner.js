import React from 'react'

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 fast" role="status" style={style.spinner}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

const style = {
    spinner: {
        width: '3rem',
        height: '3rem'
    }
}
export default Spinner