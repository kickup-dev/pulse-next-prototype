import { first, isEmpty, map, max, sortBy, take, times } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withTheme } from 'styled-components';

import { GhostButton } from '../../button';
import { Meta, Paragraph } from '../../text';

import Bar from './Bar';
import LoadingBar from './LoadingBar';
import { makeScale } from './utils';

/** Generates a grid cell styles, necessary for IE11 compatibility */
const cellCss = (gridColumn, gridRow) => `
  -ms-grid-column: ${gridColumn};
  -ms-grid-row: ${gridRow};
`;

class SimpleBarChart extends Component {
  constructor(props) {
    super(props);
    this.toggleTruncated = this.toggleTruncated.bind(this);
    this.state = { isTruncated: true };
  }

  toggleTruncated() {
    this.setState(({ isTruncated }) => ({ isTruncated: !isTruncated }));
  }

  render() {
    const {
      data,
      loading,
      segmentationLabel,
      segmentOnClick,
      theme,
      truncateAt,
      unitsLabel,
    } = this.props;
    const { isTruncated } = this.state;

    const colorScale = makeScale(theme, data.length);
    const upperBound = max(map(data, ({ value }) => value));

    let displayedSegments = sortBy(data, ({ value }) => 0 - value);

    if (isTruncated && truncateAt) {
      displayedSegments = take(displayedSegments, truncateAt);
    }

    if (loading && isEmpty(displayedSegments)) {
      displayedSegments = times(truncateAt || 5, { segments: [], value: 0 });
    }

    if (!loading && isEmpty(displayedSegments)) {
      return <Paragraph mb={3} mt={5} textAlign="center">No data to display</Paragraph>;
    }

    return (
      <div>
        <div
          css={`
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: minmax(min-content, auto) minmax(min-content, auto) minmax(100px, 1fr);
            grid-template-columns: minmax(min-content, auto) minmax(min-content, auto) minmax(100px, 1fr);
          `}
        >
          <Meta color="blue" css={cellCss(1, 1)}>{unitsLabel}</Meta>
          <Meta color="blue" mx={4} css={cellCss(2, 1)}>{segmentationLabel}</Meta>
          <div />
          {displayedSegments.map(({ segments, value }, index) => {
            if (loading) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                  <LoadingBar mt={4} css={cellCss(1, index + 2)} />
                  <LoadingBar mt={4} mx={4} css={cellCss(2, index + 2)} />
                  <LoadingBar mt={4} css={cellCss(3, index + 2)} />
                </Fragment>
              );
            }
            const segment = first(segments);
            const { identifier, label } = segment;

            return (
              <Fragment key={identifier}>
                <Meta color="grayMedium" mt={4} textAlign="right" css={cellCss(1, index + 2)}>
                  {value}
                </Meta>
                <Meta mx={4} mt={4} css={cellCss(2, index + 2)}>
                  {label}
                </Meta>
                <div css={`width: 100%; ${cellCss(3, index + 2)}`}>
                  <Bar
                    color={colorScale[index]}
                    mt={4}
                    onClick={() => segmentOnClick(segment)}
                    width={value / upperBound}
                  />
                </div>
              </Fragment>
            );
          })}
        </div>
        {truncateAt && truncateAt < data.length && (
          <GhostButton block mt={3} onClick={this.toggleTruncated}>
            {`Show ${isTruncated ? 'More' : 'Less'}`}
          </GhostButton>
        )}
      </div>
    );
  }
}

SimpleBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    segments: PropTypes.arrayOf(PropTypes.shape({
      identifier: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    value: PropTypes.number.isRequired,
  })),
  loading: PropTypes.bool,
  segmentationLabel: PropTypes.string,
  segmentOnClick: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
  truncateAt: PropTypes.number,
  unitsLabel: PropTypes.string,
};

SimpleBarChart.defaultProps = {
  data: [],
  loading: false,
  segmentationLabel: 'Segment',
  segmentOnClick: () => {},
  truncateAt: 5,
  unitsLabel: 'Units',
};

export default withTheme(SimpleBarChart);
