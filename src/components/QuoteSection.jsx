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
  text-align: center;
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
        <H4>МОТИВАЦИЈА</H4>
        <H2>
          Важно е да се знае дека претприемништвото <br /> е начин на живеење,
          кое може да се научи и практикува од секој
        </H2>
      </QuoteSectionContainer>
    </QuoteMainSection>
  );
}

export default QuoteSection;
