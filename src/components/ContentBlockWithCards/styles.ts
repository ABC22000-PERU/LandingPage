import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  padding: 6rem 1.5rem;
  background-color: #ffffff;

  @media only screen and (max-width: 992px) {
    padding: 4rem 1rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #155439; 
  text-align: center;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

export const Subheading = styled.p`
  max-width: 640px;
  margin: 0 auto 2.5rem;
  font-size: 1.125rem;
  color: #2c3e50;
  text-align: center;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem; /* separación horizontal entre ilustración y cards */

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const IllustrationContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: 500px;  /* Ajusta este ancho según tu ilustración */
  }
`;

export const CardsContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
  }
`;

export const ServiceCard = styled.div`
  background-color: #f9f9f9; /* Gris muy claro */
  border-radius: 8px;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    width: 100%;
    height: 100%;
    color: #155439; /* Color verde si es un SVG de “fill=currentColor” */
  }
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #155439; /* Verde */
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  @media only screen and (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #444444;
  line-height: 1.4;

  @media only screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`;
