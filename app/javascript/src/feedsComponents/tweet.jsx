import React from 'react'



class Tweet extends React.Component {
  // set this.props to variables
  get id() {  return this.props.id; }
  get message() { return this.props.message; }
  get username() { return this.props.username; }

  componentDidMount() {
    console.log('this.props', this.props);
  }


  render() {

    return (
      <React.Fragment>
        <div key={this.id} id={this.id} className="tweet border border-primary rounded shadow mb-3">
          <div className="tweet-content bg-light">
            <div className="user-field">
              <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">{this.username}</a>
              <br />
              <a className="screenName text-decoration-none ps-2 text-muted" href="#">@{this.username}</a>
            </div>
            <div className="tweet-field">
              <p className="tweet-content ps-2">{this.message}</p>
            </div>
            <div className='delete-button btn m-2 btn-outline-danger' >Delete</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Tweet
