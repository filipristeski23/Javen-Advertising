import styled from "styled-components";
import Client from "../materials/readingbook.avif";
import NewClient from "../materials/pngegg (2).png";

const ClientsMainSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
  background-color: #f5dfd2;
`;

const ClientsSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const H2 = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 2.188rem;
  margin: 0;
`;

const Clients = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 12.5rem;
`;

const A = styled.a`
  background-color: black;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  color: white;
  display: inline-block;
  align-self: center;
`;

function ClientsSection() {
  return (
    <ClientsMainSection>
      <ClientsSectionContainer>
        <H2>Our wall of fame</H2>
        <Clients>
          <Img src={NewClient} alt="First Client" />
          <Img src={NewClient} alt="Second Client" />
          <Img src={NewClient} alt="Third Client" />
          <Img src={NewClient} alt="Fourth Client" />
        </Clients>
        <A href="">WHAT ARE YOU WAITING FOR ?</A>
      </ClientsSectionContainer>
    </ClientsMainSection>
  );
}

export default ClientsSection;
