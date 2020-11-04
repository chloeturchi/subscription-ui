import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Submit = ({ value }) => {
  return <Input type="submit" value={value} />;
};

Submit.propTypes = {
  value: PropTypes.string.isRequired,
};

const Input = styled.input`
  width: 179px;
  height: 38px;
  background-color: #cecece;
  text-align: center;
  border-radius: 4px;
  border: none;
  color: #535353;
`;

export default Submit;
