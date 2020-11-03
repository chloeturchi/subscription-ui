import styled from 'styled-components';

const Icon = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.src};
`;

export default Icon;
