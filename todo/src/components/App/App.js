import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';
  const App = () => {
    const items = [
      {
        value: 'Написать новое приложение'
      },
      {
        value: 'Прописать props'
      },
      {
        value: 'Сделать все дела'
      }
    ];

    return (
      <div className='wrap'>
        <h1 className='wrap_title'>Важные дела:</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer count={6} />
      </div>);
    }


  export default App;
