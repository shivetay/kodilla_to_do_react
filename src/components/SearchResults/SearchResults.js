import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';
import {Link} from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.node,
    listId: PropTypes.node,
  }

  render() {
    const {cards} = this.props;
    //console.log('SEARCH RESULTS', this.props);
    return (
      <section>
        <Container>
          <div className={styles.component}>
            {cards.map(cardData => {
            //console.log('aaa', cardData);
              return (
                < Link className = {
                  styles.links
                }
                to = {
                  `/list/${cardData.listId}`
                }
                key = {
                  cardData.id
                } >
                  <Card key={cardData.id} {...cardData}>
                  </Card></Link>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
