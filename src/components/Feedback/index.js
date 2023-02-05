// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackSelected: true,
  }

  onClickEmoji = () => this.setState({isFeedBackSelected: false})

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button type="button" alt="emoji-button" className="button">
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                  onClick={this.onClickEmoji}
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedBackQuestion = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBackSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card-container">
          {isFeedBackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedBackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
