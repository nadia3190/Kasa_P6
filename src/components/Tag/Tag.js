import React from "react";
import "./Tag.scss";
import PropTypes from "prop-types";

const Tag =(props) => {
    const tags = props.tags.map((item, index) => {
        return <div key={index} className="tag-wrapper">
            <span className="tag-title">{item}</span>
                </div>
    })
    return (
        <div className="tag-container">
            {tags}
        </div>
    )
}

export default Tag;

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
};
