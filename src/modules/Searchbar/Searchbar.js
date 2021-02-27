import react, {Component} from 'react';
import axios from 'axios';

export default class Searchbar extends Component{
    render(){
        return(
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.props.onSearch}>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.props.query}
                        onChange={this.props.onChange}
                    />
                    
                    <button onSubmit={this.props.onSearch}>Load More</button>
                </form>
            </header>
        )
    }
}
