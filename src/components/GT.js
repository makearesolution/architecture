import React from 'react';

const GT = ({country, city}) => {
    return (
        <div >
            <div className="col-md-5 col-sm-12  title-container" style={{color: "#fff", height: "60px", padding: "0", fontSize: "26px"}}>
                Gantugs, {country + " " + city}
            </div>
            <div className="col-md-7 col-sm-12 form-container" style={{color: "#fff", height: "60px", padding: "0", fontSize: "26px"}}>

            </div>
        </div>


    );
};

export default GT;