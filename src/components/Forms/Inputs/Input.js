import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Text from '../../UIElements/Text';

const Input = ({ inputName, type, name, value, onChange }) => {
  return (
    <label>
      <Text margin="0 0 5px 0" size="14px">
        {inputName}
      </Text>
      <Container>
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Container>
    </label>
  );
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Container = styled.div`
  width: 272px;
  height: 30px;
  display: flex;
`;
const StyledInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  border: none;
`;

export default Input;
