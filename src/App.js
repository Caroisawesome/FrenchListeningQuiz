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
                <h1><FontAwesomeIcon icon={faFrog} />CaroQuizzer</h1>
                </header> 
                <div className="App-content">
                <div className="instructions">
                <p>Test your listening skills!</p>
                <p>Make sure your audio is turned on, and select an option below.</p>
                <p>Enter what you hear in the space provided.</p>
                <hr/>
            </div>
                <div>
                <button className="btn" onClick={() => this.updateQuizType(0)}> Date</button>
                <button className="btn" onClick={() => this.updateQuizType(1)}> Number</button>
                </div>
                <Quizzer quiz_type={this.state.quiz_type}/>

            </div>
                </div>
        );
    }

}

export default App;
