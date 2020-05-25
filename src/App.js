import React from 'react';
import './App.css';
import Quizzer from './Quizzer';

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
                <header className="App-header">
                <button onClick={() => this.updateQuizType(0)}> Date</button>
                <button onClick={() => this.updateQuizType(1)}> Number</button>
                <Quizzer quiz_type={this.state.quiz_type}/>
                </header>
                </div>
        );
    }

}

export default App;
