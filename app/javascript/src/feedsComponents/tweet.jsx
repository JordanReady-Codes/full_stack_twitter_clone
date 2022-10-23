import React from 'react'

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      username: '',
      id: '',
    };

  }

  render() {
    const { message, username, id } = this.state;

    return (
      <React.Fragment>
        <div id={id} className="tweet border border-primary rounded shadow mb-3">
          <div className="tweet-content bg-light">
            <div className="user-field">
              <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">{username}</a>
              <br />
              <a className="screenName text-decoration-none ps-2 text-muted" href="#">@{username}</a>
            </div>
            <div className="tweet-field">
              <p className="tweet-content ps-2">{message}</p>
            </div>
            <div className='delete-button btn m-2 btn-outline-danger' >Delete</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Tweet
