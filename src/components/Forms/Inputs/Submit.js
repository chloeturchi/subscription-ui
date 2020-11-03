import React from 'react';

import styled from 'styled-components';

const Submit = () => {
  return <Input type="submit" value="S'inscrire" />;
};

const Input = styled.input`
  width: 179px;
  height: 38px;
  background-color: #cecece;
  border-radius: 4px;
  border: none;
  color: #535353;
`;

export default Submit;
