import React from 'react';

import styled from 'styled-components';
import Icon from './Icon';
import Text from './Text';

const SocialSubButton = ({ iconImg, text, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon height="20px" src={iconImg} />
      <Text margin="0px 11px" size="16px">
        {text}
      </Text>
    </Button>
  );
};

const Button = styled.button`
  margin: 0px;
  height: 59px;
  width: 272px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default SocialSubButton;
