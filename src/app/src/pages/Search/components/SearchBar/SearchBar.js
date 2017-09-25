import React, {Component} from 'react';
import { createBrowserHistory } from 'history';
import SearchInput from '../../../../common/components/SearchInput/SearchInput';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';
import {
    SearchBarContainer,
    SearchBarControls,
    SearchBarLabel
} from './SearchBar.styles';
import Button from "../../../../common/components/Button/Button";
import {Route} from "react-router";

const searchByLabel = 'SEARCH BY';
const searchByValues = [{
    label: 'TITLE',
    value: 'title'
}, {
    label: 'DIRECTOR',
    value: 'director'
}];

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {searchValue: ''};
    }


    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleClick(history) {
        history.push(`/search/${this.state.searchValue}`);
    }

    render() {
        return (<SearchBarContainer>
            <SearchBarLabel>FIND YOUR MOVIE</SearchBarLabel>
            <SearchInput
                value={this.state.searchValue}
                onChange={this.handleChange.bind(this)}/>
            <SearchBarControls>
                <RadioValues
                    label={searchByLabel}
                    values={searchByValues}
                    buttonType='button'
                    active='title'/>
                <Route render={({history}) =>
                    <Button
                        onClick={this.handleClick.bind(this, history)}
                        color='red'
                        size='large'
                        title='SEARCH'/>
                }/>
            </SearchBarControls>
        </SearchBarContainer>);
    }
}

export default SearchBar;