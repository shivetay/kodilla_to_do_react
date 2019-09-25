import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
// import {pageContents, listData} from '../../data/dataStore';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import {DragDropContext} from 'react-beautiful-dnd';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    moveCard: PropTypes.func,
  }
 
  render() {
    const {title, subtitle, lists, moveCard} = this.props;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        // console.log({
        //   id: result.draggableId,
        //   dest: {
        //     index: result.destination.index,
        //     columnId: result.destination.droppableId,
        //   },
        //   src: {
        //     index: result.source.index,
        //     columnId: result.source.droppableId,
        //   },
        // });
        moveCard;
      }
    };
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </DragDropContext> 
        <Search />
      </main>
    );
  }
}

export default Home;
