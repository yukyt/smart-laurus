import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import RecommendItem from './RecommendItem';

const styles = {
  nav: {
    width: '40px',
    minWidth: '40px',
    boxSizing: 'borderBox',
  },
};

const itemClass = i => `item item_pos_${i}`;

const bestCoordinateShowCount = () => {
  if (window.matchMedia('(max-width: 690px)').matches) {
    return 1;
  } if (window.matchMedia('(max-width: 930px)').matches) {
    return 2;
  }
  return 3;
};

const isDiffBestCoordinates = (currentBestCoordinates, nextBestCoordinates) => {
  // length check
  if (currentBestCoordinates.length !== nextBestCoordinates.length) {
    return true;
  }
  // check all item (up to 3 each category)
  // if item id and possession is same, its same.
  const match = Object.keys(currentBestCoordinates).find(i => (
    currentBestCoordinates[i].id !== nextBestCoordinates[i].id
     || currentBestCoordinates[i].possession !== nextBestCoordinates[i].possession));
  return (match !== undefined);
};

class RecommendItemList extends Component {
  shouldComponentUpdate(nextProps) {
    const { slicedCategoryBestCoordinates } = this.props;
    return isDiffBestCoordinates(
      slicedCategoryBestCoordinates,
      nextProps.slicedCategoryBestCoordinates,
    );
  }

  render() {
    const {
      categoryName, category, order, prev, next, slicedCategoryBestCoordinates, onItemClick,
    } = this.props;
    return (
      <div>
        {categoryName}
        {' '}
        {order + 1}
        位
        <div className="frame">
          <Button
            variant="contained"
            style={styles.nav}
            color="secondary"
            onClick={() => prev(category, order)}
            disabled={order === 0}
          >
            {<NavigateBefore />}
          </Button>
          {slicedCategoryBestCoordinates.slice(0, bestCoordinateShowCount())
            .map((bestCoordinate, i) => (
              <RecommendItem
                key={bestCoordinate.id}
                item={bestCoordinate}
                itemClass={itemClass(i + 1)}
                onClick={onItemClick(bestCoordinate.id)}
              />
            ))}
          <Button
            variant="contained"
            style={styles.nav}
            color="secondary"
            onClick={() => next(category, order)}
            disabled={slicedCategoryBestCoordinates.length === 1}
          >
            {<NavigateNext />}
          </Button>
        </div>
      </div>
    );
  }
}

RecommendItemList.propTypes = {
  category: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  slicedCategoryBestCoordinates: PropTypes.arrayOf(Object).isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default RecommendItemList;
