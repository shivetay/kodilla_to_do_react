import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
  }
  static defaultProps = {
    children: <p>Thing we need to do TODAY!!!!</p>,
  }

  render() {
    return(
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImage={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column colTitle={'Walk dog'}></Column>
          <Column colTitle={'Ride bike'}></Column>
          <Column colTitle={'Hug wife'}></Column>
        </div>
      </section>
    )
  }
}

export default List;