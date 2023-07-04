// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickingEmoji = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    return (
      <div>
        {isClicked ? (
          <div className="bg-container">
            <div className="feedback-card-container">
              <img src={resources.loveEmojiUrl} alt="love emoji" />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-container">
            <div className="feedback-card-container">
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {resources.emojis.map(each => (
                  <li key={each.id}>
                    <button type="button" onClick={this.onClickingEmoji}>
                      <img src={each.imageUrl} alt={each.name} />
                      <p>{each.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
