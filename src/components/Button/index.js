import styled from 'styled-components';

/* https://fdossena.com/?p=html5cool/buttons/i.frag */
const Button = styled.button`
  display:inline-block;
  padding:0.7em 1.7em;
  margin: 1rem;
  border-radius:0.2em;
  box-sizing: border-box;
  font-weight: 800;
  text-decoration:none;
  color:#FFFFFF;
  background-color:rgb(55 232 184);
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.09),
              inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),
              inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align:center;
  position:relative;
  border: none;

  &:active{
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0,0,0,0.09),
                inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  }
`;

export default Button;
