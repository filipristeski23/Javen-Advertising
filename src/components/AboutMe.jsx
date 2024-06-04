import styled from "styled-components";
import Decoration2 from "../materials/Decoration3.svg";

const SecondSection = styled.div`
  width: 100%;
  background-color: #f5dfd2;
  padding: 4.688rem 0px;
  position: relative;
`;

const SecondSectionContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
  margin: 0;
  z-index: 1;
`;

const H4 = styled.h4`
  font-size: 1.125rem;
  font-weight: 400;
  width: 75%;
  margin: 0;
  z-index: 1;
`;

const Img3 = styled.img`
  right: 0;
  top: 3.125rem;
  position: absolute;
  z-index: 0;
`;

function AboutMe() {
  return (
    <SecondSection>
      <SecondSectionContainer>
        <Img3 src={Decoration2} alt="Decoration" />
        <H2>Нашата Приказна Ваша Инспирација</H2>
        <H4>
          Во срцето на Битола, нашата приказна започнува во Декември 2023 година
          со една искра - вербата во неограничениот потенцијал на жените во
          бизнисот. Па основавме женска заедница со цел да се воведе нова ера на
          иновација и лидерство од страна на жените во бизнисот.
        </H4>
      </SecondSectionContainer>
    </SecondSection>
  );
}

export default AboutMe;
