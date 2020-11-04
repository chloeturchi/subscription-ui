import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledIcon = styled.img`
  height: ${(props) => (props.height ? props.height : '15px')};
  width: ${(props) => (props.width ? props.width : '15px')};
  background: ${(props) => (props.src ? props.height : 'white')};
`;

const Icon = ({ height, width, src }) => {
  return <StyledIcon height={height} width={width} src={src} />;
};

Icon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Icon;
