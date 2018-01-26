import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    UI(v) {
        this.setState({ userInput: v })
    }

    isPalindrome(v) {
        let x = v;
        let y = v;
        y = (y.split('').reverse().join(''));
        x === y ? this.setState({ palindrome: 'true'}) : this.setState({ palindrome: 'false' }); 
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={x => this.UI(x.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.isPalindrome(this.state.userInput) }>Check</button>
                <span className='resultsBox'>Palindrome: { this.state.palindrome }</span>
            </div>
        );
    }
}

export default Palindrome;