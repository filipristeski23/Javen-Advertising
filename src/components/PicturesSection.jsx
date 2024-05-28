import styled from "styled-components";
import Reading from "../materials/readingbook.avif";

const PicturesMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.688rem;
`;

const Pictures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Img = styled.div`
  flex: 1;
  background-image: url(${Reading});
  aspect-ratio: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const H3 = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const Line = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  height: 0.125rem;
  background-color: black;
`;

function PicturesSection() {
  return (
    <PicturesMainSection>
      <H3>SOME TEXT I CAN'T READ</H3>
      <Pictures>
        <Img></Img>
        <Img></Img>
        <Img></Img>
        <Img></Img>
        <Img></Img>
        <Img></Img>
      </Pictures>
      <Line></Line>
    </PicturesMainSection>
  );
}

export default PicturesSection;
