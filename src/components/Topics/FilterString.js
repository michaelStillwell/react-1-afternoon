import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        };
    }

    UI(v) {
        this.setState({ userInput: v });
    }

    filter(v) {
        let a = this.state.names;
        this.setState({ filteredNames: a.filter(x => x.includes(v)) });
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: { JSON.stringify(this.state.names) }</span>
                <input className='inputLine' onChange={x => this.UI(x.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.filter(this.state.userInput) }> Filter </button>
                <span className='resultsBox filterStringPB'>Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        );
    }
}

export default FilterString;