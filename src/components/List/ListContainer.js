import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createAction_addColumn} from '../../redux/columnRedux';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  return {
    ...listParams,
    columns: getColumnsForList(state, props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
