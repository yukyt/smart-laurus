import React from 'react';
import { PropTypes } from 'prop-types';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';
import AddToPhotosIcon from 'material-ui-icons/AddToPhotos';


const possessionStyle = (possession) => {
  if (possession) {
    return {};
  }
  return { backgroundColor: 'gray' };
};

const RecommendItem = ({
  item, itemClass, onClick,
}) => (
  <Paper className={itemClass} style={possessionStyle(item.possession)}>
    <Checkbox
      checked={!item.possession}
      className="checkbox"
      icon={<DeleteForeverIcon />}
      checkedIcon={<AddToPhotosIcon />}
      tabIndex={-1}
      onClick={() => onClick(item.id)}
      disableRipple={false}
    />
    <div className="detail">
      <div className="name">{item.name}</div>
      <div className="score">{item.score}点</div>
    </div>
  </Paper>
);

RecommendItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    possession: PropTypes.bool.isRequired,
  }).isRequired,
  itemClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RecommendItem;
