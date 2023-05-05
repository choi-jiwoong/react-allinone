import React from 'react'
import PropTypes from 'prop-types';

function PropComponent(props) {
  return <div>{props.name}</div>
}

PropComponent.defaultProps = {
  name: "Jimmy",
  age: 9
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: function (props, propName, compoentName) {
    if (!/(7|8)/.test(props[propName])) {
      return new Error(
        "Invalid prop `" + propName + "(" + props[propName] + ")` supplied to`" + compoentName + "`.Validation failed."
      );

    }
  }
}



export default function Compoent() {
  return (
    <div>
      <PropComponent />
    </div>
  )
}
