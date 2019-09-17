import styled from 'styled-components';
import Body from './Body';
import Header from './Header';

const Wrapper = styled.div`
  width: 1140px;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
`

export default ({children}) => (
  <Body>
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
  </Body>
)