import React from 'react'
import Tweet from './tweet'
import Tweetbox from './tweetbox'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'


class Feedbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      });
      console.log('data', data)
    })
  }

  render() {
    const { tweets } = this.state;

    return (
      <React.Fragment>
        <div className="col-9 feed-box border border-primary rounded shadow">
        <Tweetbox />
          {tweets.map(tweet => {
            return (
              <div className="feedbox mt-4">
              <Tweet id={tweet.id} message={tweet.message} username={tweet.username} />
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Feedbox