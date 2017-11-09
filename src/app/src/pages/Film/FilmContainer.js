import { connect } from 'react-redux';
import Film from './Film';
import {
    loadFilm,
    loadRecommendations
} from '../../actions/film';

const mapStateToProps = state => {
    return {
        film: state.film.film,
        isLoaded: !state.film.loading,
        loadingRec: !state.film.loadingRec,
        recommendations: state.film.recommendations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRecommendations: (id) => {
            dispatch( loadRecommendations(id) );
        },
        loadFilm: (id) => {
            dispatch( loadFilm(id) );
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Film);