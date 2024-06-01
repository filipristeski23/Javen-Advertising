import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  color: blac;
  font-weight: 500;
  font-size: 2.188rem;
`;

function ErrorPage() {
  return (
    <Div>
      <H3>Unexpected error occured, please go back</H3>
    </Div>
  );
}

export default ErrorPage;
