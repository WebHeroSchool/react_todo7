import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'Написать приложение React',
        isDone: true,
        id: 1
      },
      {
        value: 'Медитаця',
        isDone: false,
        id: 2
      },
      {
        value: 'Сходить в бассей',
        isDone: false,
        id: 3
      },
      {
        value: 'Приготовить ужин',
        isDone: false,
        id: 4
      },
      {
        value: 'Купить корм коту',
        isDone: false,
        id: 5
      }
    ],
    count: 5
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() =>{
    console.log('СМОНТИРОВАНО');
  }, []);

  useEffect(() =>{
    console.log('ОБНОВЛЕНИЕ');
  });

  useEffect(() =>{
    console.log('ИЗМЕНЕНИЯ COUNT');
  }, [count]);

    const onClickDone = id => {
      const newItemList = items.map(item => {
        const newItem = { ...item };

        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }
        return newItem
      });
      setItems(newItemList)
    };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
    setCount((count) => count -1);
  };

  const onClickAdd = value => {
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItems);
    setCount((count) => count + 1 );
  };

    return (
      <div className={styles.wrap}>
      <Card>
          <CardContent>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem onClickAdd={onClickAdd} />
            <ItemList
                items={items}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
             />
            <Footer count={count} />
          </CardContent>
        </Card>
      </div>);
};

export default Todo;
