import React, { Component } from 'react';

class EvenAndOdds extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    change(v) {
        this.setState({ userInput: v });
    }

    eoO(ui) {
        let a = ui.split(',');
        let e = [];
        let o = [];
        for ( let x = 0; x < a.length; x++ ) {
            if (a[x] % 2 === 0) {
                e.push( parseInt(a[x]));
            } else {
                o.push( parseInt(a[x]));
            }
        }
        this.setState({ evenArray: e, oddArray: o });
    }

    render() {
        return (
            <div className='pussleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ x => this.change(x.target.value) }></input>
                <button className='confirmationButton' onClick={() => this.eoO(this.state.userInput)}></button>
                <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className='resultBox'>Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        );
    }
}

export default EvenAndOdds;