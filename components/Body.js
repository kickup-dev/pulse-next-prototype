import styled from 'styled-components';
import '@fortawesome/fontawesome-pro/css/all.css';


const Body = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.grayLight};
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 100px;
`

export default ({children}) => (
  <Body>
    {children}
  </Body>
)