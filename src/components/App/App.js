import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import {pageContents, listData, settings} from '../../data/dataStore';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';


class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }
  static protoTypes = {
    title: PropTypes.node,
    lists: PropTypes.array,
  }
  static defaultProps = {
  title: listData.description,
  }
  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.listData,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
          ))}
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    )
  }
}

export default App;
