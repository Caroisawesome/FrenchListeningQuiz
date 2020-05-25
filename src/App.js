import React from 'react';
import './App.css';
import Quizzer from './Quizzer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrog } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {quiz_type: 0};
    }

    updateQuizType(quiz_type) {
        this.setState({ quiz_type })
    }

    render() {
        return (
                <div className="App">
                <header >
                <h1><FontAwesomeIcon icon={faFrog} />Quizzer</h1>
                </header> 
                <body className="App-content">
                <div>
                <button onClick={() => this.updateQuizType(0)}> Date</button>
                <button onClick={() => this.updateQuizType(1)}> Number</button>
                </div>
                <Quizzer quiz_type={this.state.quiz_type}/>

            </body>
                </div>
        );
    }

}

export default App;
