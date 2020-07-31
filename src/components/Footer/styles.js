import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding : 20px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ExternalLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"

})`
  text-decoration: underline;
  margin: 0.5rem;
   color: currentColor;
`