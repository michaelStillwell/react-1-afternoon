import React, {Component} from 'react';

class FilterObjects extends Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filterArray: []
        }
    }

    uI(v) {
        this.setState({ userInput: v });
    }

    filter(v) {
        let a = this.state.employees;
        let filteredArray = [];
        for ( let x = 0; x < a.length; x++ ) {
            if ( a[x].hasOwnProperty(v) ) {
                filteredArray.push(a[x])
            }
        }
        this.setState({filterArray: filteredArray});
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className='inputLine' onChange={ x => this.uI(x.target.value) }></input>
                <button className='confirmationButton' onClick={ x => this.filter(this.state.userInput) }>Filter</button>
                <span className='resultsBox filterObjextRB'>Filtered: { JSON.stringify(this.state.filterArray, null, 10) }</span>
            </div>
        );
    }
}

export default FilterObjects;