import React from 'react';
import moment from 'moment';
import momentRandom from 'moment-random';

export default class Quizzer extends React.Component {

    randomDate() {
        const dt = momentRandom();
        return moment(dt).format("dddd, MMMM Do YYYY, h:mm:ss a");
    }

    getNext(quiz_type) {
        if (quiz_type) {
            return Math.ceil(Math.random() * 100000)
        } else  {
            return this.randomDate()
        }
    }

    render() {
        return <h1>{this.getNext(this.props.quiz_type)}</h1>;
    }
}
