import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Text from '../../UIElements/Text';

const GenreSelect = ({ value, onChange }) => {
  return (
    <label>
      <Text margin="0px 0px 5px 0px" size="14px">
        Genre
      </Text>
      <Input value={value} onChange={onChange}>
        <option value="none" disabled>
          Sélectionner
        </option>
        <option value="m">M.</option>
        <option value="mme">Mme</option>
      </Input>
    </label>
  );
};

GenreSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Input = styled.select`
  width: 272px;
  height: 30px;
  background-color: #f5f5f5;
  border: none;
  padding: 0px 9px;
  option {
    width: 200px;
  }
  option[value='none'] {
    color: #acacac;
  }
`;

export default GenreSelect;
