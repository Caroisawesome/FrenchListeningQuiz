import React from 'react';
import moment from 'moment';
import momentRandom from 'moment-random'
import 'moment/locale/fr';

export default class Quizzer extends React.Component {

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
        return moment(dt).format("dddd, MMMM Do YYYY, h:mm:ss a");
    }

    getNext(quiz_type) {
        let txt = ""
        if (quiz_type) {
            txt =  Math.ceil(Math.random() * 100000)
        } else  {
            txt = this.randomDate()
        }

        this.textToSpeech(txt)
        return txt
    }

    render() {
        return <h1>{this.getNext(this.props.quiz_type)}</h1>;
    }
}
