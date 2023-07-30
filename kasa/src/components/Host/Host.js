
import React from "react";
import "./Host.scss"
import PropTypes from "prop-types";


const Host =(props) => {
        return <div className="wrapper">
                    <h4 className="hostName">{props.host.name}</h4>
                    <img className="hostImage" src={props.host.picture} alt="Portrait of the host"/>
                </div>
}

export default Host;

Host.propTypes = { 
    host: PropTypes.object.isRequired,
};
