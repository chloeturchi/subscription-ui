import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Text from '../../UIElements/Text';

const Checkbox = ({ name, text, textSize, onChange, checked }) => {
  return (
    <Label>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Text size={textSize}>{text}</Text>
    </Label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

const Label = styled.label`
  display: flex;
  input {
    margin: 0px 12px 0px 0px;
  }
`;

export default Checkbox;
