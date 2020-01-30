import styled from 'styled-components';
import { Avatar } from '../../componentLibrary/icon';
import { Heading, Meta } from '../../componentLibrary/text';

const Profile = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${({theme})=> theme.colors.grayLight};
  padding: ${({theme})=> theme.space[3]}px;
`
const UserDetails = styled.div`
  margin-left: ${({theme})=> theme.space[2]}px;
`

export default () => (
  <Profile p={4}>
    <Avatar size="lg" src="https://i.pravatar.cc/42?img=63"/>
    <UserDetails>
      <Heading mb={2}size={'sm'}>User Name</Heading>
      <Meta ml={1}>Sample District</Meta>
    </UserDetails>
  </Profile>
)