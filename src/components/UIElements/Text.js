import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledText = styled.p`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
`;

const Text = ({ margin, size, children }) => {
  return (
    <StyledText margin={margin} size={size}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  margin: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Text;
