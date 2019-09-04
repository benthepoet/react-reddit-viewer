import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import App from '../components/App';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);