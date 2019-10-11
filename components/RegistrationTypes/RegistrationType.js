import { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import { ChoicesField } from '../../componentLibrary/field/'
import Input from '../../componentLibrary/field/TextField/BasicTextField';
import TextArea from '../../componentLibrary/field/TextAreaField/';
import { Subsection } from '../../componentLibrary/layout'
import { Heading, Paragraph, Label, Meta } from '../../componentLibrary/text';
import { Button, GhostButton, OutlineButton } from '../../componentLibrary/button';

const Item = styled.div`
  border: ${({theme})=> `${theme.colors.grayMediumLight} 1px solid`};
  padding: ${({theme})=> theme.space[4]}px;
  & + & { border-top: none; }
`;

export default ({initialView="default", ...props}) => {
  const [view, setView] = useState(initialView);
  return (
    <Item>
      {view === 'edit'
      ? <EditView {...props} clickHandler={()=>setView('default')}/>
        : <DefaultView {...props} clickHandler={()=>setView('edit')}/>}

    </Item>
  )
}

const DefaultView = ({
  title = "Registration Type",
  description = "",
  credits = [{name:'Credit #1', value: 4}],
  hours = "",
  price = 45.00,
  clickHandler}) => (
  <Flex>
    <Box flexGrow={1} ph={3}>
      <Heading size="small" mt={3} mb={3}>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </Box>
    <Box width={1/4} ph={3}>
      { credits.map(credit => <Paragraph mt={3} mb={3}><strong style={{fontWeight: "bold"}}>{credit.value}</strong> {credit.name}</Paragraph>)}

    </Box>
    <Box width={1/4} ph={3}>
      {hours && <Paragraph mt={3} mb={3}>{hours}</Paragraph>}
      {price && <Meta mt={3} mb={3} color="green">${price}</Meta>}
    </Box>
    <Box ph={3}>
      <Flex>
        <GhostButton onClick={clickHandler}>Edit</GhostButton>
        <GhostButton icon="trash" color="grayMedium"></GhostButton>
      </Flex>
    </Box>
  </Flex>
);

const EditView = ({
  title,
  description,
  credits,
  hours,
  price,
  clickHandler,
  singleton}) => (
  <div>
    { !singleton &&
      <Flex>
        <Box flexGrow={1}>
          <Heading size="small" mt={3} mb={3}>{title ? title : 'Create New'}</Heading>
        </Box>
        <Box ph={3}>
          <GhostButton icon="trash" color="grayMedium"></GhostButton>
        </Box>
      </Flex>
    }
    <Box>
      { !singleton &&
        <Fragment>
          <Label>Registration Type Name</Label>
          <Input />

          <Label>Description</Label>
          <TextArea input={{name: 'description'}} meta={{form: 'random'}}/>
        </Fragment>
      }
      <ChoicesField
        allowMultiple={null}
        choices={[{label: 'Yes',value: true},{label: 'No',value: false}]}
        label="Add Credits?"
        input={{onChange: () => {}, value: true}}
        meta={{}}
      />
      <Subsection>
        <Label>Credit #1</Label>
        <Input />
        <Label>Credit #2</Label>
        <Input />
      </Subsection>

      <ChoicesField
        allowMultiple={null}
        choices={[{label: 'Yes',value: true},{label: 'No',value: false}]}
        label="Customize Hours?"
        input={{onChange: () => {}, value: false}}
        meta={{}}
      />

      <ChoicesField
        allowMultiple={null}
        choices={[{label: 'Yes',value: true},{label: 'No',value: false}]}
        label="Add Payment?"
        input={{onChange: () => {}, value: false}}
        meta={{}}
      />

    </Box>
    {!singleton &&
      <Box width={1} pt={3}>
        <Flex justifyContent="center" >
          <OutlineButton onClick={clickHandler} color="grayDark" mr={1}>Cancel</OutlineButton>
          <Button onClick={clickHandler} ml={1}>Save</Button>
        </Flex>
      </Box>
    }
  </div>
);