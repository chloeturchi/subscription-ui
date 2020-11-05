import React from 'react';
import PropTypes from 'prop-types';
import './submitInput.css';

/**
 * Primary UI component for user interaction
 */
export const SubmitInput = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <input
      type="submit"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
      value={label}
    />
  );
};

SubmitInput.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

SubmitInput.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
};
