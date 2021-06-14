import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

const LodingSpinner = () => {
    return (
        <div className="loading-wrapper">
            <Loader
                type="Ball-Triangle"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    );
}

export default LodingSpinner;
