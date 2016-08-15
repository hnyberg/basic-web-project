import React from 'react';

const GeneralInfo2 = function GeneralInfo(props) {
  return (
    <div>
      General info 2: {props.order}
    </div>
  );
};
GeneralInfo2.propTypes = { order: React.PropTypes.object };

export default GeneralInfo2;
