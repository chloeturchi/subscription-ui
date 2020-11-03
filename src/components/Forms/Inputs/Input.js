import React from 'react';

import styled from 'styled-components';
import Text from '../../UIElements/Text';

const Input = ({ inputName, type, name }) => {
  return (
    <label>
      <Text margin="0 0 5px 0" size="14px">
        {inputName}
      </Text>
      <Container>
        <StyledInput type={type} name={name} />
      </Container>
    </label>
  );
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
