import fetch from 'isomorphic-unfetch';
import  { useState } from 'react';
import styled from 'styled-components';
import Input from '../../componentLibrary/input/TextInput';
import Icon from '../../componentLibrary/icon/Icon';
import { Paragraph, Meta } from '../../componentLibrary/text/';
import { Box, Flex } from 'rebass'

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: ${({theme}) => theme.space[5]}px;
`;

const SearchWrapper = styled.div`
    position: relative;
`

const SearchBar = styled(Input)`
    height: 38px;
    background: ${({theme}) => theme.colors.grayLight};
    border-radius: 4px;
`
const QuickAction = styled.div`
    border: 1px solid ${({theme}) => theme.colors.grayMediumLight};
    padding: ${({theme}) => theme.space[2]}px ${({theme}) => theme.space[3]}px;
    background: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    margin-right: -10px; //using the end adornment which is opinionated.
`

const Pane = styled.div`
    position: absolute;
    min-width: 500px;
    display: flex;
    top: 45px;
    background: ${({theme})=> theme.colors.white};
    border: 1px solid ${({theme})=> theme.colors.grayMediumLight};
    border-radius: 4px;
`

const PaneLeft = styled.div`
    width: 25%;
    padding: ${({theme}) => theme.space[5]}px;
    background: ${({theme})=> theme.colors.grayLight};
`
const PaneRight = styled.div`
    padding: ${({theme}) => theme.space[5]}px;
    background: ${({theme})=> theme.colors.white};
`

const ResultCount = styled(Meta)`
    display: block;
    & + & { margin-top:  ${({theme}) => theme.space[4]}px}
`

const ResultsSet = ({resultType, icon, results}) => {
    return (
        <Box mb={4}>
            <Meta mb={3}>{resultType}</Meta>
            {
                results.map(result => {
                    return <Flex alignItems="flex-start" mb={3}>
                        {icon && <Icon icon={icon} color={'grayMedium'}/>}
                        <Box ml={3}>
                            <Paragraph>{result.name}</Paragraph>
                            <Paragraph color={"grayMedium"}>{result.metadata}</Paragraph>
                        </Box>
                    </Flex>
                })
            }
        </Box>
    )
}

const ResultsPane = ({results}) => {
    console.log(results)
    return (
        <Pane>
            <PaneLeft>
                {(results.users && results.users.length > 0) && <ResultCount>People ({results.users.length})</ResultCount>}
                {(results.events && results.events.length > 0) && <ResultCount>Events ({results.events.length})</ResultCount>}
                {(results.reports && results.reports.length > 0) && <ResultCount>Reports ({results.reports.length})</ResultCount>}
                {(results.forms && results.forms.length > 0) && <ResultCount>Forms ({results.forms.length})</ResultCount>}
            </PaneLeft>
            <PaneRight>
                {(results.users && results.users.length > 0) && <ResultsSet resultType="People" results={results.users}/>}
                {(results.events && results.events.length > 0) && <ResultsSet resultType="Events" icon="calendar-alt" results={results.events}/>}
                {(results.reports && results.reports.length > 0) && <ResultsSet resultType="Reports" icon="file" results={results.reports}/>}
                {(results.forms && results.forms.length > 0) && <ResultsSet resultType="Forms" icon="clipboard" results={results.forms}/>}
            </PaneRight>
        </Pane>
    )
}


export default () => {
    const [results, setResults] = useState({});

    const search = input => {
        if (input.length < 1) return setResults({});

        fetch(`/api/search?search=${input}`)
            .then(data => data.json())
            .then(result => setResults(result));
    };

    const showResultsPane = () => results.events || results.users || results.reports || results.forms;

    return (
        <Container>
            <SearchWrapper>
                <SearchBar
                    placeholder="Search"
                    startAdornment={<Icon icon="search"/>}
                    endAdornment={<QuickAction>/</QuickAction>}
                    onChange={e => search(e.target.value)}
                />
                { showResultsPane() &&  <ResultsPane results={results}/> }
            </SearchWrapper>
        </Container>
    )
}



