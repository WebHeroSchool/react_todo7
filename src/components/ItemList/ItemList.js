import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemList = ({ items }) => (<List>
  {items.map(item => <li key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
    />
  </li>)}
</List>);

export default ItemList;
