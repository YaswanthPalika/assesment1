import {Component} from 'react'

import './index.css'

class Sample extends Component {
  state = {
    text: '',
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <div className="container-2">
          <div className="container-3">
            <p>{text}</p>
          </div>
          <div className="container-3">
            <p>{text}</p>
          </div>
        </div>
        <div className="container-4">
          <input input={text} onChange={this.onChangeInput} maxLength="100" />
        </div>
        <div className="container-2">
          <div className="container-3">
            <p>{text}</p>
          </div>
          <div className="container-3">
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sample
