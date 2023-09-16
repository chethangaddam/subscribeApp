// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClicktoUnsubscribe = () => {
    const {isSubscribed} = this.state
    this.setState({isSubscribed: false})
    console.log(isSubscribed)
  }

  onClicktoSubscribe = () => {
    const {isSubscribed} = this.state
    this.setState({isSubscribed: true})
  }

  render() {
    const {isSubscribed} = this.state
    let subscribeBtn
    if (isSubscribed) {
      subscribeBtn = (
        <button type="button" onClick={this.onClicktoUnsubscribe}>
          Subscribed
        </button>
      )
    } else {
      subscribeBtn = (
        <button type="button" onClick={this.onClicktoSubscribe}>
          Subscribe
        </button>
      )
    }
    return (
      <div className="background">
        <h1>Welcome</h1>
        <p>Thank you Happy Learning</p>
        {subscribeBtn}
      </div>
    )
  }
}

export default Welcome
