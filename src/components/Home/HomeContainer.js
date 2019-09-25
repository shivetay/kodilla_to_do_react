import {connect} from 'react-redux';
import Home from './Home';
import {createAction_moveCard} from '../../redux/cardRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch, props) => ({
  moveCard: title => dispatch(createAction_moveCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);