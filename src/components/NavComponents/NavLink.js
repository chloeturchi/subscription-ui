import React from 'react';

import styled from 'styled-components';

const NavLink = ({ children, link }) => {
  return <Link href={link}>{children}</Link>;
};

const Link = styled.a`
  color: #535353;
  &:visited {
    color: #535353;
  }
`;

export default NavLink;
