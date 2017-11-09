import React, { Component } from 'react';
import { Route } from 'react-router';
import SearchInput from '../../../../common/components/SearchInput/SearchInput';
import {
SearchBarContainer,
SearchBarControls,
SearchBarLabel
} from './SearchBar.styles';
import Button from '../../../../common/components/Button/Button';

class SearchBar extends Component {
    constructor(props) {
        super();
        this.state = {
            searchValue: props.searchValue || ''
        };
    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.searchValue || this.state.searchValue) {
            return;
        }
        this.setState({
            searchValue: nextProps.searchValue || this.state.searchValue
        });
    }

    render() {
        return <SearchBarContainer>
            <SearchBarLabel>FIND YOUR MOVIE</SearchBarLabel>
            <SearchInput
                value={this.state.searchValue}
                onChange={this.handleChange.bind(this)}/>
            <SearchBarControls>
                <Route render={({history}) =>
                    <Button
                        onClick={() => this.props.performSearch(this.state.searchValue)}
                        color='red'
                        size='large'
                        title='SEARCH'/>
                }/>
            </SearchBarControls>
        </SearchBarContainer>;
    }
}

export default SearchBar;