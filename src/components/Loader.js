import React from 'react'
import { SpinnerCircularSplit } from 'spinners-react'

const Loader = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <SpinnerCircularSplit color="#4285F4" size={100} thickness={50} secondaryColor="transparent" />
            </div>
        </>
    )
}

export default Loader
