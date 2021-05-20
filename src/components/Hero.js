import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 40px;
  backface-visibility: hidden;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  margin: 2rem;
  margin-bottom: 10rem;
  border-radius: 10px;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background-color: transparent;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    background-color: transparent;
  }

  button {
    box-sizing: border-box;
    border: 1px solid lightgray;
    color: white;
    padding: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover {
      color: white;
      background-color: lightgray;
      transition: 0.3s;
      color: black;
    }
  }
`;

const Hero = ({ image, title, desc, desc2, desc3, desc4, hide, github, ghPages }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
        <p>{desc4}</p>
        <button
          onClick={() => {
            window.location.href = github;
          }}
        >
          View Code
        </button>
        {hide ? null : (
          <button
            onClick={() => {
              window.location.href = ghPages;
            }}
          >
            View Site
          </button>
        )}
      </Container>
    </Section>
  );
};

export default Hero;
