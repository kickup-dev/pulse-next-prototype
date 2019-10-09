import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import { Heading, Paragraph } from '../../componentLibrary/text';
import { GhostButton } from '../../componentLibrary/button';

const Item = styled.div`
  border: ${({theme})=> `${theme.colors.grayMediumLight} 1px solid`};
  padding: ${({theme})=> theme.space[4]}px;
  & + & { border-top: none; }
`;

export default ({
  title = "Registration Type",
  description = "",
  credits = [],
  hours = "",
  price = 0}) => (
  <Item>
    <Flex>
      <Box flexGrow={1} ph={3}>
        <Heading size="small">{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </Box>
      <Box width={1/4} ph={3}>
        <Paragraph>Credits</Paragraph>
      </Box>
      <Box width={1/4} ph={3}>
        <Paragraph>Hours and Price</Paragraph>
      </Box>
      <Box ph={3}>
        <Flex>
          <GhostButton>Edit</GhostButton>
          <GhostButton icon="trash" color="grayMedium"></GhostButton>
        </Flex>
      </Box>
    </Flex>
  </Item>
)