import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 40px;
  backface-visibility: hidden;

  @media screen and (max-width: 1200px) {
    background-size: cover;
    background-position: top;
    height: 80vh;
  }

  @media screen and (max-width: 400px) {
    background-size: 300px 300px;
    height: 50vh;
  }
`;

const Container = styled.div`
  color: white;
  padding: 2rem;
  border-radius: 10px;
  transform: translateY(-30vh);
  display: inline-block;

  @media screen and (max-width: 1200px) {
    align-self: flex-end;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
    padding: 0.5rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background-color: transparent;

    @media screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    background-color: transparent;

    @media screen and (max-width: 400px) {
      margin-bottom: none;
    }
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

    @media screen and (max-width: 400px) {
      padding: 0.5rem;
    }

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
    <>
      <Section image={image}></Section>
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
    </>
  );
};

export default Hero;
