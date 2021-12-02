import styled from 'styled-components';
import PropTypes from 'prop-types';
const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export default function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}
Container.propTypes = {
  children: PropTypes.node,
};
