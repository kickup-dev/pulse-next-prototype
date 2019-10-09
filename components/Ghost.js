import styled from 'styled-components';

const Bar = styled.div`
  height: ${({theme}) => theme.space[6]}px;
  width: 100%;
  background: ${({theme}) => theme.colors.grayLight};
  & + & { margin-top: ${({theme}) => theme.space[6]}px; }
`
const Wrapper = styled.div`
  margin-top: ${({theme}) => theme.space[6]}px;
  margin-bottom: ${({theme}) => theme.space[6]}px;
`

export default () => (
  <Wrapper>
    <Bar/>
    <Bar/>
    <Bar/>
  </Wrapper>
)