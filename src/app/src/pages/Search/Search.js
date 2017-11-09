import React, { Component } from 'react';
import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchStatusBar from './components/SearchStatusBar/SearchStatusBar';
import SearchResults from './components/SearchResults/SearchResults';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';

export default class Search extends Component {
    componentDidMount() {
        const { loadFilms, match } = this.props;
        loadFilms(match.params.query);
    }

    componentDidUpdate() {
        const { loadFilms, match } = this.props;
        loadFilms(match.params.query);
    }

    render() {
        return <PageContainer>
            <SearchHeader
                performSearch={(query) => this.props.performSearch(query)}
                searchValue={this.props.query}/>
            <SearchStatusBar
                totalResults={this.props.totalResults}
                sortValues={this.props.sortValues}
                activeSortValue={this.props.activeSortValue}
                onSortValueChange={this.props.onSortValueChange}/>
            <PageMainArea>
                <SearchResults
                    page={this.props.page}
                    totalPages={this.props.totalPages}
                    films={this.props.sortFilms(this.props.films, this.props.activeSortValue)}/>
            </PageMainArea>
        </PageContainer>;
    }
}
