import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {title, icon, cards, addCard} = this.props;
    return(
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon}/></span></h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => addCard(title)}/>
        </div>
      </section>
    );
  }
}

export default Column;