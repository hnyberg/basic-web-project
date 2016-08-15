import React from 'react';

const GeneralInfo = function GeneralInfo(props) {
  return (
    <div>
      General info: {props.order}
    </div>
  );
};
GeneralInfo.propTypes = { order: React.PropTypes.object };

export default GeneralInfo;
