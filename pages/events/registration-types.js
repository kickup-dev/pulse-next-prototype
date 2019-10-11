import { Paragraph } from '../../componentLibrary/text';
import { ContentBlock, Section } from '../../componentLibrary/layout';
import { Button, OutlineButton } from '../../componentLibrary/button';

import Wrapper from '../../components/Wrapper';
import Ghost from '../../components/Ghost';

import RegistrationType from '../../components/RegistrationTypes/RegistrationType';
export default () => (
  <Wrapper>
    <ContentBlock
      headingText="Mulitple Types"
    >
      <Section
        accentColor="blue"
        headingIcon="calendar-alt"
        headingText="Details"
      >
        <Ghost />
      </Section>
      <Section
        accentColor="green"
        headingIcon="ticket-alt"
        headingText="Registration Settings"
      >
        <RegistrationType
          title="SVVSD Staff"
          description="For teachers and staff employed by St. Vrain Valley School District"
        />
        <RegistrationType
          title="Non-SVVSD Staff"
          description="For teachers and staff outside of the St. Vrain Valley School District"
        />
        <OutlineButton color="grayMedium" mt={3}>Add Registration Type</OutlineButton>
      </Section>
      <Section
        accentColor="grayLight"
        headingIcon="cog"
        headingText="Advanced Settings"
      >
        <Ghost />
      </Section>
    </ContentBlock>

    <ContentBlock
      mt={6}
      headingText="Single Type"
    >
      <Section
        accentColor="blue"
        headingIcon="calendar-alt"
        headingText="Details"
      >
        <Ghost />
      </Section>
      <Section
        accentColor="green"
        headingIcon="ticket-alt"
        headingText="Registration Settings"
      >
        <RegistrationType
          title=" "
          description=""
          initialView="edit"
          singleton={true}
        />
        <OutlineButton color="grayMedium" mt={3}>Add Registration Type</OutlineButton>
      </Section>
      <Section
        accentColor="grayLight"
        headingIcon="cog"
        headingText="Advanced Settings"
      >
        <Ghost />
      </Section>
    </ContentBlock>
  </Wrapper>
);