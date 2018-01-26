import React, {Component} from 'react';
import Sum from '../Topics/Sum';
import EvenAndOdds from '../Topics/EvenAndOdd';
import FilterObjetcts from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';

class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenAndOdds />
                <FilterObjetcts />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        );
    }
}

export default TopicBrowser;