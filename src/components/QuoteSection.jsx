import styled from "styled-components";

const QuoteMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
  background-color: #dfcfc2;
`;

const QuoteSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
`;

const H2 = styled.h2`
  color: black;
  font-weight: 500;
  font-size: 2.5rem;
  margin: 0;
`;

const H4 = styled.h4`
  color: black;
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;
function QuoteSection() {
  return (
    <QuoteMainSection>
      <QuoteSectionContainer>
        <H4>SOME TEXT</H4>
        <H2>
          Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
        </H2>
        <H4>- AUTHOR NAME</H4>
      </QuoteSectionContainer>
    </QuoteMainSection>
  );
}

export default QuoteSection;
