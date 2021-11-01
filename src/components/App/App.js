import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Написать приложение React',
        isDone: true
      },
      {
        value: 'Медитаця',
        isDone: true
      },
      {
        value: 'Сходить в бассей',
        isDone: false
      },
      {
        value: 'Приготовить ужин',
        isDone: false
      },
      {
        value: 'Купить корм коту',
        isDone: false
      }
    ]
  };

  render() {
    return (
      <div className={styles.wrap}>
      <Card>
          <CardContent>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem />
            <ItemList items={this.state.items} />
            <Footer count={3} />
          </CardContent>
        </Card>
      </div>);
  }
};

export default App;
