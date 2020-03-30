import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Container, Item} from './styles';

function Pagination({current, length, color}) {
  function renderItem(index, selected) {
    const style = [];

    const selectedColor = StyleSheet.create({
      selected: {
        backgroundColor: color,
      },
    });

    if (selected) style.push(selectedColor.selected);

    return <Item key={index} style={style} />;
  }

  function renderIndicators() {
    const indicators = [];
    for (let i = 0; i < length; i += 1) {
      indicators.push(renderItem(i, i === current));
    }
    return indicators;
  }

  return <Container>{renderIndicators()}</Container>;
}

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  color: PropTypes.string,
};

Pagination.defaultProps = {
  color: 'white',
};

export default Pagination;
