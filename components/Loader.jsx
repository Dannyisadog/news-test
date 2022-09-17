import CircularProgress from '@mui/material/CircularProgress';
import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000aa;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: ${(props) => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;

  .loader-icon {
    color: #0073ff;
  }
`;

const Loader = ({ show }) => {
  return (
    <Container show={show}>
      <CircularProgress className="loader-icon" />
    </Container>
  );
}

export default Loader;