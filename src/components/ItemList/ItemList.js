import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<List>
  {items.map(item => (
    <Item
      key={item.value}
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  ))}
</List>);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
