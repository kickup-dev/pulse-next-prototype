import  { Table, Thead, Tbody, Tr, Th } from '../../components/Table';
import { Icon } from '../../componentLibrary/icon';
import { ButtonMenu } from '../../componentLibrary/menu';

import Wrapper from '../../components/Wrapper';
import Heading from '../../componentLibrary/text/Heading';
import ContentBlock from '../../components/ContentBlock';

export default () => (
  <Wrapper>
    <ContentBlock>
      <Heading>Tables</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Has Roster</Th>
            <Th>Last Activity</Th>
            <Th>Activity</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>First Year Evaluations</Th>
            <Th><Icon icon="check" color="green"/></Th>
            <Th>5/12/19</Th>
            <Th>
              <ButtonMenu alignment="right">
                <ButtonMenu.Item icon="pencil">Edit</ButtonMenu.Item>
                <ButtonMenu.Item icon="trash">Archive</ButtonMenu.Item>
              </ButtonMenu>
            </Th>
          </Tr>
        </Tbody>
      </Table>
    </ContentBlock>
  </Wrapper>
);