import React from 'react';
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

ItemList.defaultProps = {
  items: [
    {
      value: 'не найдено'
    }
  ]
};

export default ItemList;
