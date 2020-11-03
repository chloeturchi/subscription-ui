import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
`;

export default Text;
