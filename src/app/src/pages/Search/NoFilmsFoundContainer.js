import { connect } from 'react-redux';
import NoFilmsFound from "./NoFilmsFound";

const mapDispatchToProps = (dispatch, props) => {
    return {
        performSearch(query) {
            props.history.push(`/search/${query}`);
        }
    }
};

export default connect(
    undefined,
    mapDispatchToProps
)(NoFilmsFound);