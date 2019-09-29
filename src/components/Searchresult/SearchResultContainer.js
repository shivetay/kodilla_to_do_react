import {connect} from 'react-redux';
import SearchResults from './SearchResult';
import {getCardsForSearch} from '../../redux/cardRedux.js';
import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);