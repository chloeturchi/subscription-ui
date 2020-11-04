import React from 'react';

import styled from 'styled-components';
import Icon from '../Icon';
import Text from '../Text';
import upArrowIcon from '../../assets/images/up-arrow.svg';

const BackLink = () => {
  return (
    <Link href="/">
      <Icon height="12px" width="8px" src={upArrowIcon} />
      <Text margin="0px 6px" size="14px">
        Retour
      </Text>
    </Link>
  );
};

const Link = styled.a`
  display: flex;
  align-items: center;
  color: #535353;
  text-decoration: none;
  &:visited {
    color: #535353;
  }
`;

export default BackLink;
