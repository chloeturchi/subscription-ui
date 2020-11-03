import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const NavLink = ({ children, link }) => {
  return <Link href={link}>{children}</Link>;
};

NavLink.propTypes = {
  children: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
};

const Link = styled.a`
  color: #535353;
  &:visited {
    color: #535353;
  }
`;

export default NavLink;
