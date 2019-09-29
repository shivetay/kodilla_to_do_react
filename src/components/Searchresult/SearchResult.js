import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResult.scss';
import {Link} from 'react-router-dom';



class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.node,
    listId: PropTypes.node,
  }

  render() {
    const {cards} = this.props;
    return (
      <section>
        <Container>
          <div className={styles.component}>
            {cards.map(cardData => {
              <Link className={styles.links} to={`/list/${cardData.listId}`}>
                <Card key={cardData.id} {...cardData} />
              </Link>;
            })}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;