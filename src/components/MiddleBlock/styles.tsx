import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Title = styled("h2")`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1c4a2c; /* Verde oscuro */
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const Content = styled("p")`
  font-size: 1rem;
  color: #444444;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 600px;
  margin: 0 auto; 
  padding: 0 1rem; 

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }

  .button-wrapper {
    margin-top: 2.5rem; 
  }
`;

export const StyledList = styled("ul")`
  list-style: none;           
  margin: 0 auto;             
  padding: 0;
  text-align: left;           
  max-width: 400px;           
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #333333;
  }
`;
