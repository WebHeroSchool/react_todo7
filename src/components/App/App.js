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

  onClickDone = id => {
    const newItemList = this.state.items.map(item=>{
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList })
  };

  onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id)}));

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count +1
  }));

  render() {
    return (
      <div className={styles.wrap}>
      <Card>
          <CardContent>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem onClickAdd={this.onClickAdd} />
            <ItemList
                items={this.state.items}
                onClickDone={this.onClickDone}
                onClickDelete={this.onClickDelete}
             />
            <Footer count={this.state.count} />
          </CardContent>
        </Card>
      </div>);
  }
};

export default App;
