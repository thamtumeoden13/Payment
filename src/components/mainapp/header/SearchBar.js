
import React from 'react';
import { SearchBar } from 'react-native-elements';

export const Search = () => {

    return (
        < SearchBar
            round //To make the searchbar corner round (default square)
            searchIcon={{ size: 24 }
            } //Size of the search icon
            // onChangeText={text => this.SearchFilterFunction(text)}
            //Filter the list using the keywords inserted in searchbar
            // onClear={text => this.SearchFilterFunction('')}
            placeholder="Type Here..."
            // value={this.state.search}
        />
    )
}