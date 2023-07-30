import React from "react";
import "./Tag.scss";
import PropTypes from "prop-types";

const Tag = (props) => {
    return <span className="tag">{props.tags}</span>;
    }

export default Tag;

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
};
