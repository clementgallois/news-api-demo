import styled from 'styled-components';
import {
  useHistory,
} from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/news.svg';

const StyledLogo = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;

    height: calc(100% - 20px);
    width: auto;
    margin: 10px;
    margin-left: 0%;

`;
const LLogo = styled(Logo)`
      height: 100%;
      width: auto;
`;
const LogoButton = () => {
  const history = useHistory();

  const handleClick = () => {
    const { pathname } = history.location;
    console.log(pathname);
    if (pathname === '/') {
      // force to reload
      history.push('/temp');
      history.goBack();
    } else {
      history.push('/');
    }
  };

  return (
    <StyledLogo onClick={handleClick} type="button">
      <LLogo />
    </StyledLogo>
  );
};
export default LogoButton;
