import React from 'react';
import './Host.scss';
import PropTypes from 'prop-types';

const Host = (props) => {
  return (
    <div className="wrapper">
      <h4 className="hostName">{props.host.name}</h4>
      <img
        className="hostImage"
        src={props.host.picture}
        alt="Portrait of the host"
      />
    </div>
  );
};

export default Host;

Host.propTypes = {
  //propTypes est un objet qui contient toutes les propriétés passées à notre composant.
  host: PropTypes.object.isRequired,
};
