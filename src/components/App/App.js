import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () =>
  (<Router>
          <div className={styles.wraps}>
            <Card className={styles.sidebar}>
              <MenuList>
                  <Link to='/' className={styles.link}><MenuItem>ОБО МНЕ</MenuItem></Link>
                  <Link to='/todo' className={styles.link}><MenuItem>ДЕЛА</MenuItem></Link>
                  <Link to='/contacts' className={styles.link}><MenuItem>КОНТАКТЫ</MenuItem></Link>
              </MenuList>
            </Card>
            <Card className={styles.content}>

                      <Route path='/' exact component={About} />
                      <Route path='/todo' component={Todo} />
                      <Route path='/contacts' component={Contacts} />

            </Card>
          </div>
      </Router>);

export default App;
