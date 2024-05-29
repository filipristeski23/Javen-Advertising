import styled from "styled-components";

const ContactFormSection = styled.div`
  width: 100%;
  padding: 4.688rem 0px;
`;

const ContactFormSectionContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;

const H3 = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 2.188rem;
  margin: 0;
  text-align: center;
`;

const H4 = styled.h4`
  color: black;
  font-weight: 400;
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 1.563rem;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  background-color: black;
  padding: 0.625rem 1.5rem;
  text-decoration: none;
  color: white;
  border: none;
  cursor: pointer;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 3.125rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const A = styled.a`
  color: black;
  font-size: 1.563rem;
`;

const Input = styled.input`
  height: 1.563rem;
  padding: 0.625rem 1.25rem 0.625rem 1.25rem;
  width: 40%;
`;

function ContactForm() {
  return (
    <ContactFormSection>
      <ContactFormSectionContainer>
        <LeftSide>
          <H3>Subscribe</H3>
          <H4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            sapiente quos exercitationem tempore laudantium corrupti facere vero
            tempora quaerat minima ex totam, culpa voluptas numquam maiores
            ratione quidem. Excepturi, autem.
          </H4>
          <Form>
            <Input type="text" placeholder="filipristeski30@gmail.com"></Input>
            <Button type="submit">Submit</Button>
          </Form>
        </LeftSide>
        <RightSide>
          <Div>
            <A href="">Home</A>
            <A href="">About</A>
            <A href="">Services</A>
          </Div>
          <Div>
            <A href="">Contact</A>
            <A href="">Blog</A>
            <A href="">Privacy Policy</A>
          </Div>
        </RightSide>
      </ContactFormSectionContainer>
    </ContactFormSection>
  );
}

export default ContactForm;
