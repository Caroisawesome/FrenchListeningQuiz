# CaroQuizzer

This App is to help English speakers to test their French listening skills. In particular, it quizzes the user on French numbers and dates. This project uses the [VoiceRSS API](http://www.voicerss.org/default.aspx) to access text to speech capabilities. [Moment.js](https://momentjs.com) is used to generate dates.

Visit the live site here: http://caro-quizzer.surge.sh

## Run the Project

[Get an api key](http://www.voicerss.org/registration.aspx) to use the VoiceRSS text to speech capabilities, and then add the following to your `.env` file:

`REACT_APP_VOICE_RSS_API_KEY=<your API key>`.

Run the project with `docker-compose up`.
