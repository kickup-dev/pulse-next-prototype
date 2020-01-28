import { Flex } from 'rebass';
import { Heading, Paragraph, Meta } from '../componentLibrary/text';
import ContentBlock from '../components/ContentBlock';
import { ButtonMenu } from '../componentLibrary/menu';

import Count from '../components/Count';
import Wrapper from '../components/Wrapper';
import Banner from '../components/Banner';

export default () => (
  <Wrapper>
    <Banner
      icon="magic"
      title="Here is an important message"
      body="Some assert that the unwarmed color reveals itself as an oozing karen to those who look."
    />
    <Heading size={"lg"} my={6}>Welcome back, Todd!</Heading>

    <Flex alignItems="center" mb={4}><Heading size={"md"} mr={3}>Todos</Heading><Count>9</Count></Flex>
    <ContentBlock
      headingText="Hello World"
    >
      <Paragraph>
        Unfortunately, that is wrong; on the contrary, the wings could be said to resemble baldish belts. Few can name a cystoid enemy that isn't a falsest relative.
      </Paragraph>
      <Paragraph mb={4}>
        Those undershirts are nothing more than paperbacks. A booklet is a helmet's postbox.
      </Paragraph>
      <ButtonMenu
        icon="angle-down"
        iconPosition="right"
        iconWeight="regular"
        text="Menu with Headings"
      >
        <ButtonMenu.Heading >
          Section 1
        </ButtonMenu.Heading>
        <ButtonMenu.Item icon="jedi-order" iconWeight="brand">
          General Kenobi
        </ButtonMenu.Item>
        <ButtonMenu.Item icon="pencil" iconWeight="solid">
         Edit This Thing
        </ButtonMenu.Item>
        <ButtonMenu.Heading >
          Section 2
        </ButtonMenu.Heading>
        <ButtonMenu.Item icon="save" iconWeight="light">
          Save This Thing
        </ButtonMenu.Item>
        <ButtonMenu.Item icon="trash" iconWeight="regular">
          Delete this thing
        </ButtonMenu.Item>
        <ButtonMenu.Item icon="book" iconWeight="brand">
          Zap this thing
        </ButtonMenu.Item>
      </ButtonMenu>
    </ContentBlock>
  </Wrapper>
);