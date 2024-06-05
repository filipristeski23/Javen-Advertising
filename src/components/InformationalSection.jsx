import styled from "styled-components";
import Reading from "../materials/readingbook.avif";

const InformationalMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
  background-color: #faf7f2;
`;

const InformationalMainSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TopLeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
`;

const H2 = styled.h2`
  color: black;
  font-weight: 500;
  font-size: 2.5rem;
  margin: 0;
  max-width: 75%;
`;

const H4 = styled.h4`
  color: black;
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  max-width: 75%;
`;

const TopRightPart = styled.div`
  flex: 1;
  position: relative;
`;

const Img1 = styled.img`
  width: 65%;
  height: 43.75rem;
  object-fit: cover;
`;

const Img2 = styled.img`
  width: 45%;
  height: 45%;
  position: absolute;
  object-fit: cover;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Img3 = styled.img`
  height: 100%;
  width: 31.25rem;
  object-fit: cover;
`;

const BottomDivRightPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
`;

const BottomDivLeftPart = styled.div`
  flex: 1;
  height: 31.25rem;
`;

const A = styled.a`
  background-color: black;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  color: white;
  display: inline-block;
  align-self: flex-start;
`;

function InformationalSection() {
  return (
    <InformationalMainSection>
      <InformationalMainSectionContainer>
        <TopDiv>
          <TopLeftPart>
            <H4>TEXT</H4>
            <H2>Main Headline For Your About Section</H2>
            <H4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              cupiditate necessitatibus doloribus voluptate rerum tenetur
              distinctio in. Impedit repellendus eos omnis sit deleniti animi
              natus provident. Amet dicta minus sit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores alias odio molestias!
              Quibusdam facilis eligendi unde.
            </H4>
          </TopLeftPart>
          <TopRightPart>
            <Img1 src={Reading}></Img1>
            <Img2 src={Reading}></Img2>
          </TopRightPart>
        </TopDiv>
        <BottomDiv>
          <BottomDivLeftPart>
            <Img3 src={Reading}></Img3>
          </BottomDivLeftPart>
          <BottomDivRightPart>
            <H4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam sapiente corrupti dicta repudiandae
              repellat. Animi unde asperiores corrupti tempore illo corporis
              voluptas ad? Non rem quo eligendi ratione. Eveniet! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Facilis sed, corrupti
              accusantium porro ea mollitia eius.
            </H4>
            <A href="www.google.com">CONTACT US NOW</A>
          </BottomDivRightPart>
        </BottomDiv>
      </InformationalMainSectionContainer>
    </InformationalMainSection>
  );
}

export default InformationalSection;
