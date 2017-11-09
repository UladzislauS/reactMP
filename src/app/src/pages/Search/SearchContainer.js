import { connect } from 'react-redux';
import Search from './Search';
import { toggleSortValue } from '../../actions/sortBy';
import { loadFilms } from '../../actions/films';

const mapStateToProps = state => {
    return {
        films: state.films.films,
        isLoaded: !state.films.loading,
        page: state.films.page,
        totalPages: state.films.totalPages,
        query: state.films.query,
        totalResults: state.films.totalResults,
        sortValues: state.sortBy.sortValues,
        activeSortValue: state.sortBy.activeSortValue
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortValueChange: (sortValues, activeSortValue) => {
            dispatch(toggleSortValue(sortValues, activeSortValue))
        },
        loadFilms: (query) => {
            dispatch(loadFilms(query));
        },
        performSearch(query) {
            props.history.push(`/search/${query}`);
        },
        sortFilms(films, sortBy) {
            return films.sort((filmA, filmB) => {
                switch(sortBy) {
                    case 'rating':
                        return filmB.vote_average - filmA.vote_average;
                    case 'date':
                    default:
                        return filmB.release_date.split('-').join('') - filmA.release_date.split('-').join('');
                }
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);