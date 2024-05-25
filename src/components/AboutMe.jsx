import styled from "styled-components";

const SecondSection = styled.div`
  width: 100%;
  background-color: #f5dfd2;
  padding: 4.688rem 0px;
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
  font-size: 30px;
  margin: 0;
`;

const H4 = styled.h4`
  font-size: 18px;
  font-weight: 400;
  width: 75%;
  margin: 0;
`;

function AboutMe() {
  return (
    <SecondSection>
      <SecondSectionContainer>
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
