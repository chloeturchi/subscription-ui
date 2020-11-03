import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const Title = styled.h1`
  font-size: 32px;
  margin: 0px;
  text-align: center;
`;

export default PageTitle;
