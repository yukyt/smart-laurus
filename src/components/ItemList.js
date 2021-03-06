import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Waypoint } from 'react-waypoint';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { toggleItem, scrollEnd } from '../actions/wardrobe';
import * as CONSTANTS from '../define';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = value => () => {
      const { onItemClick } = this.props;
      onItemClick(value);
    };
  }

  render() {
    const {
      viewMode, items, itemShowMaxCount, impossessions, onScrollEnd,
    } = this.props;
    return (
      <section style={{ display: viewMode === CONSTANTS.VIEW_MODE.WARDROBE ? '' : 'none' }}>
        <List>
          {items.slice(0, itemShowMaxCount).map(singleItem => (
            <ListItem
              key={singleItem.id}
              role={undefined}
              dense
              button
              className="item"
              style={{ backgroundColor: (impossessions.indexOf(singleItem.id) === -1) ? 'white' : 'lightgray' }}
              disableRipple
            >
              <Fab
                color="secondary"
                className="item__possession-button"
                style={{ display: (singleItem.id) ? 'inline-block' : 'none' }}
                onClick={this.handleToggle(singleItem.id)}
              >
                {(() => {
                  if (impossessions.indexOf(singleItem.id) === -1) {
                    return <DeleteForeverIcon className="item__possession-button-icon" />;
                  }
                  return (<AddToPhotosIcon className="item__possession-button-icon" />);
                })()}
              </Fab>
              <ListItemText primary={`${impossessions.indexOf(singleItem.id) === -1 ? '' : '[非所持]'}${singleItem.name}`} />
            </ListItem>
          ))}
        </List>
        <Waypoint onEnter={() => {
          onScrollEnd();
        }}
        />
      </section>
    );
  }
}

ItemList.defaultProps = {
  items: [],
};

ItemList.propTypes = {
  viewMode: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onScrollEnd: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(Object),
  itemShowMaxCount: PropTypes.number.isRequired,
  impossessions: PropTypes.arrayOf(Number).isRequired,
};

const getVisibleItems = (items, itemCategoryFilter, searchText) => items
  .filter(item => (item.category === itemCategoryFilter))
  .filter(item => (item.name.indexOf(searchText) > -1));

const mapStateToProps = state => ({
  viewMode: state.viewMode,
  itemCategory: state.itemCategory,
  items: getVisibleItems(state.items, state.itemCategoryFilter, state.searchText),
  itemShowMaxCount: state.itemShowMaxCount,
  impossessions: state.impossessions,
});

const mapDispatchToProps = dispatch => ({
  onItemClick: (itemId) => {
    dispatch(toggleItem(itemId));
  },
  onScrollEnd: () => {
    dispatch(scrollEnd());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
