import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './App.module.css';

  const App = () => {
    const items = [
      {
        value: 'Написать новое приложение',
        isDone: true
      },
      {
        value: 'Прописать props',
        isDone: true
      },
      {
        value: 'Сделать все дела',
        isDone: false
      }
    ];

    return (
      <div className={styles.wrap}>
      <Card>
          <CardContent>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem />
            <ItemList items={items} />
            <Footer count={6} />
          </CardContent>
        </Card>
      </div>);
    }
export default App;
