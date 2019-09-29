import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container.js';
import {withRouter} from 'react-router';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
    history: PropTypes.any,
  }

  static defaultProps = {
    text: settings.search.defaultText,
    icon: settings.search.icon,
  }

  state = {
    value: this.props.searchString || '',
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
    });
  }

  handleOK(){
    this.props.history.push(`/search/${this.state.value}`);
  }

  componentWillReceiveProps(newProps){
    this.setState({value: newProps.searchString});
  }

  render() {
    const {text, icon, countVisible, countAll} = this.props;
    const {value} = this.state;
    return (
      <div className={styles.component}>
        <Container>
          <input
            type='text'
            placeholder={text}
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <Button className={styles.buttons} onClick={() => this.handleOK()}><Icon name={icon} /></Button>
          <div>
            { countVisible == countAll ? '' : `${countVisible} / ${countAll}` }
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Search);
