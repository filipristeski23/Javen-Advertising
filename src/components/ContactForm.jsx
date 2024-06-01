import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-weight: 500;
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

const Input = styled.input`
  height: 1.563rem;
  padding: 0.625rem 1.25rem 0.625rem 1.25rem;
  width: 40%;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 1.563rem;
`;

function ContactForm() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="filipristeski30@gmail.com"
              value={email}
              onChange={handleInputChange}
            ></Input>
            <Button type="submit">Submit</Button>
          </Form>
        </LeftSide>
        <RightSide>
          <Div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/AboutUsPage">About</StyledLink>
            <StyledLink to="/">Services</StyledLink>
          </Div>
          <Div>
            <StyledLink to="/">Contact</StyledLink>
            <StyledLink to="/">Contact</StyledLink>
            <StyledLink to="/">Blog</StyledLink>
          </Div>
        </RightSide>
      </ContactFormSectionContainer>
    </ContactFormSection>
  );
}

export default ContactForm;
