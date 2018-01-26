import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    UI1(v) {
        this.setState({ number1: v });
    }
    UI2(v) {
        this.setState({ number2: v });
    }

    findSum(n1, n2) {
        let s = Number(n1) + Number(n2);
        this.setState({ sum: s })
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={x => this.UI1(x.target.value)}></input>
                <input className='inputLine' onChange={x => this.UI2(x.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.findSum(this.state.number1, this.state.number2)}>Find Sum</button>
                <span className='resultBox'>The Sum is: {JSON.stringify(this.state.sum)}</span>
            </div>
        );
    }
}

export default Sum;