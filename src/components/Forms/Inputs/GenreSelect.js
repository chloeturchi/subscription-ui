import React from 'react';

import styled from 'styled-components';
import Text from '../../UIElements/Text';

const GenreSelect = () => {
  return (
    <label>
      <Text margin="0 0 5px 0" size="14px">
        Genre
      </Text>
      <Input value="none" onChange="">
        <option value="none" disabled>
          Sélectionner
        </option>
        <option value="m">M.</option>
        <option value="mme">Mme</option>
        <option value="autre">Autre</option>
      </Input>
    </label>
  );
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
`;

export default GenreSelect;
