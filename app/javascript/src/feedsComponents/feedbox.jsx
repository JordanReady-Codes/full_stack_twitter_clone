import React from 'react'
import Tweet from './tweet'
import Tweetbox from './tweetbox'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'


class Feedbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      id: '',
      tweets: []
    };
  }

  componentDidMount() {
    this.getTweets();
  }

  getTweets = () => {
    fetch('/api/tweets', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then(data => {
      this.setState({
        tweets: data.tweets,
        message: data.message,
        username: data.username,
        id: data.id,
      });
      console.log('data', data)
    })
  }

  render() {
    const { tweets, username, message, id } = this.state;

    return (
      <React.Fragment>
        <div className="col-9 feed-box border border-primary rounded shadow">
        <Tweetbox />
          {tweets.map(() => {
            return (
              <div className="feedbox mt-4">
              <Tweet id={id} message={message} username={username} />
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Feedbox