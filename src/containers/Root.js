import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeSubreddit, fetchPosts, handleSubmit } from '../actions';
import App from '../components/App';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeSubreddit, fetchPosts, handleSubmit }, dispatch);
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);