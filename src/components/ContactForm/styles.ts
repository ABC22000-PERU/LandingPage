import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;       /* espacio entre botones */
  margin-top: 1rem; /* separador respecto a los campos */

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    align-items: stretch;
  }
`;


export const WhatsappButton = styled("a")`
  display: inline-block;
  background-color: #25D366;   /* color característico de WhatsApp */
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #1DA851;
  }

  @media only screen and (max-width: 414px) {
    width: 100%; /* a pantalla muy chica, que ocupe todo el ancho */
  }
`;
