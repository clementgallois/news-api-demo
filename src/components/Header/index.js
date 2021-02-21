import styled from 'styled-components';

import SearchBar from '../SearchBar';
import PageContainer from '../PageContainer';
import LogoButton from './LogoButton';

const StyledHeader = styled.header`
    box-shadow: 0 2px 12px rgb(0 0 0 / 8%);;
    border-bottom: 1px solid #d9d9d9;
    background-color: #fff;
    position: sticky;
    top:0;
    z-index: 1;
`;

const Wrappers = styled(PageContainer)`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

`;

const Header = () => (
  <StyledHeader className="App-header">
    <Wrappers>
      <LogoButton />
      <SearchBar />
    </Wrappers>
  </StyledHeader>
);

export default Header;
