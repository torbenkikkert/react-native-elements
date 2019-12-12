import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxIcon = ({
  checked,
  onIconPress,
  onLongIconPress,
  size,
  checkedIcon,
  uncheckedIcon,
  iconType,
  checkedColor,
  uncheckedColor,
}) => {
  if (checked && React.isValidElement(checkedIcon)) {
    return checkedIcon;
  }

  if (!checked && React.isValidElement(uncheckedIcon)) {
    return uncheckedIcon;
  }

  return null;
};

CheckBoxIcon.propTypes = {
  checked: PropTypes.bool,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  size: PropTypes.number,
  checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconType: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
};

export default CheckBoxIcon;
