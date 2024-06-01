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
        <H2>MY MISSION</H2>
        <H4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          adipisci quas consequuntur perspiciatis corrupti quae, consectetur
          voluptatibus reiciendis, illo officiis alias consequatur? Quidem ipsa
          consectetur cum dolorum cumque natus explicabo?
        </H4>
      </SecondSectionContainer>
    </SecondSection>
  );
}

export default AboutMe;
