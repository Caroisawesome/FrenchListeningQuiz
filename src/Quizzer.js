import React from 'react';
import moment from 'moment';
import momentRandom from 'moment-random'
import 'moment/locale/fr';

export default class Quizzer extends React.Component {

    constructor(props) {
        super(props)
        this.dup = true
        this.state = { value : "", text: "", num_correct: 0 }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.value !== prevState.value) return
        if (this.state.num_correct !== prevState.num_correct) return
        const text = this.getNext(this.props.quiz_type)
        if (text) this.setState({ text })
    }

    textToSpeech(text) {
        window.VoiceRSS.speech({
            key: process.env.REACT_APP_VOICE_RSS_API_KEY,
            src: text,
            hl: 'fr-fr',
            r: 0,
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
    }

    randomDate() {
        moment.locale('fr')
        const dt = momentRandom();
        return moment(dt).format("dddd, MMMM Do YYYY");
    }

    getNext(quiz_type) {
        this.dup = !this.dup
        if (this.dup) return
        let txt = ""
        if (quiz_type) {
            txt =  Math.ceil(Math.random() * 100000).toString();
        } else  {
            txt = this.randomDate()
        }

        this.textToSpeech(txt)
        console.log("text", txt)
        return txt
    }

    handleChange(e) {

        if (this.state.text !== "" && e.target.value === this.state.text) {
            this.setState(st => ({
                num_correct: st.num_correct++,
                value: "",
                text: ""
            }))
            e.target.value = ""
        } else {
            this.setState({value: e.target.value});
        }
    }


    checkCorrectness() {
        const len = this.state.value.length
        return (this.state.value.slice(0,len) === this.state.text.slice(0,len))
    }

    getCorrectnessStyle() {
        const correct = this.checkCorrectness()
        return correct ? 'success' : 'fail'
    }

    render() {
        return (
                <div>
                <h3>Number Correct: {this.state.num_correct}</h3>
                <form id="quizzer-form">
                <input type="text" className={this.getCorrectnessStyle()} onChange={this.handleChange.bind(this)} />
                </form>
            </div>
        )
    }
}
