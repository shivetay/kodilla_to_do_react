import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>To do App</h1>
        <h2 className={styles.subtitle}>TO DO</h2>
        <List title={['To Do today', <sup key='1'> soon!</sup>]}
        image={'https://cdn.pixabay.com/photo/2018/03/31/09/55/color-3277733_960_720.jpg'}>
          {/* tu wchodzi children dla list tag <p></p> */} 
        </List>
      </main>
    )
  }
}

export default App;
