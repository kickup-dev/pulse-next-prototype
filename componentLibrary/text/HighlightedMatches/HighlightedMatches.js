import PropTypes from 'prop-types';
import React from 'react';
import { compose, escapeRegExp, isEmpty, map, split } from 'lodash/fp';
import { withTheme } from 'styled-components';

import Highlighter from 'react-highlight-words';

const WHITESPACE = /\s+/g;
const splitSearchWords = compose(map(escapeRegExp), split(WHITESPACE));

const HighlightedMatches = ({
  searchValue,
  text,
  theme,
}) => {
  if (isEmpty(searchValue)) {
    return text;
  }

  return (
    <Highlighter
      highlightStyle={{ backgroundColor: theme.colors.yellow, lineHeight: 1.9 }}
      searchWords={splitSearchWords(searchValue)}
      textToHighlight={text}
    />
  );
};

HighlightedMatches.propTypes = {
  searchValue: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
  }).isRequired,
};

HighlightedMatches.defaultProps = {
  searchValue: null,
  text: '',
};

export default withTheme(HighlightedMatches);
