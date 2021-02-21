import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/news.svg';
import SearchBar from '../SearchBar';
import MainContent from '../MainContent';

const StyledHeader = styled.header`
    box-shadow: 0 2px 12px rgb(0 0 0 / 8%);;
    border-bottom: 1px solid #d9d9d9;
    background-color: #fff;
    position: sticky;
    top:0;
    z-index: 1;
`;

const Wrappers = styled(MainContent)`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

`;

const StyledLogo = styled(Logo)`
    height: calc(100% - 20px);
    width: auto;
    padding: 10px;
    padding-left: 0%;
`;
const Header = () => (
  <StyledHeader className="App-header">
    <Wrappers>
      <StyledLogo />

      <SearchBar />
    </Wrappers>
  </StyledHeader>
);

export default Header;
