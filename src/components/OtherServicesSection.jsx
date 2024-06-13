import styled from "styled-components";
import Reading from "../materials/readingbook.avif";

const OtherServicesMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px 0px;
  background-color: #faf7f2;
`;

const OtherServicesSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3.125rem;
  border-bottom: 0.125rem solid black;
  padding-bottom: 4.688rem;
`;

const Img = styled.img`
  border-radius: 48% 48% 0rem 0rem;
  width: 100%;
  height: 25rem;
  object-fit: cover;
`;

const H3 = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 1.563rem;
  margin: 0;
  text-align: center;
`;

const H4 = styled.h4`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const A = styled.a`
  background-color: #ad9372;
  padding: 0.625rem 1.25rem;
  color: black;
  text-decoration: none;
  color: white;
`;

function OtherServicesSection() {
  return (
    <OtherServicesMainSection>
      <OtherServicesSectionContainer>
        <ImgDiv>
          <Img src={Reading}></Img>
          <H3>Поддршка и Советување за Жени Претприемачи</H3>
          <H4>
            Ние нудиме индивидуално советување и менторски програми за жените
            претприемачи кои сакаат да ги подобрат своите вештини и да ги
            зголемат своите шанси за успех, нашата цел е да помогнеме на секоја
            жена да ја постигне целта.
          </H4>
          <A href="www.google.com">Започни</A>
        </ImgDiv>
        <ImgDiv>
          <Img src={Reading}></Img>
          <H3>Обучување и Развој на Потребните Вештини</H3>
          <H4>
            Нашите обуки и работилници се дизајнирани да ги опремат жените
            претприемачи со потребните знаења и вештини за успешно водење на
            бизнис. Од финансиско управување до маркетинг стратегии, нашите
            програми ги покриваат сите аспекти.
          </H4>
          <A href="www.google.com">Започни</A>
        </ImgDiv>
        <ImgDiv>
          <Img src={Reading}></Img>
          <H3>Мрежни Можности и Поддршка во Заедницата</H3>
          <H4>
            Создавање мрежи и поврзување со други успешни жени претприемачи е
            клучен дел од нашиот пристап. Ние организираме настани и мрежни
            сесии каде што жените можат да споделуваат искуства, идеи и да
            создаваат нови можности за соработка.
          </H4>
          <A href="www.google.com">Започни</A>
        </ImgDiv>
      </OtherServicesSectionContainer>
    </OtherServicesMainSection>
  );
}

export default OtherServicesSection;
