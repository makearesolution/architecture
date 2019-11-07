import React from 'react';

const Sam = ({country, city}) => {
    return (
        <div className="col-md-12 col-sm-12 form-container" style={{color: "#fff", height: "60px", padding: "0", fontSize: "26px"}}>
            Samdan, {country + " " + city}
        </div>
    );
};

export default Sam;