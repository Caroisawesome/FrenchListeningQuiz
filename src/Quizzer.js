import React from 'react';
import moment from 'moment';
import momentRandom from 'moment-random'
import 'moment/locale/fr';

export default class Quizzer extends React.Component {

    constructor(props) {
        super(props)
        this.dup = true
        this.state = { value : "", text: "" }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.value !== prevState.value) return
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
        this.setState({value: e.target.value});
    }

    checkCorrectness() {
        const len = this.state.value.length
        return (this.state.value.slice(0,len) === this.state.text.slice(0,len))
    }

    getCorrectnessStyle() {
        const correct = this.checkCorrectness()
        const color = correct ? 'green' : 'red'
        return {backgroundColor: color}
    }

    render() {
        return (
                <form>
                <input type="text" style={this.getCorrectnessStyle()} onChange={this.handleChange.bind(this)} />
                </form>
        )
    }
}
